import { getImageHelper } from "@/helpers/get-image-helper";
import HomeNotFoundMessage from "@/messages/home-not-found-message";
import Home from "@/sections/home";
import { globalService } from "@/services/global-service";
import { pageService } from "@/services/page-service";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery({
    queryKey: ['home'],
    queryFn: () => pageService(),
  });

  const global = await queryClient.fetchQuery({
    queryKey: ['global'],
    queryFn: () => globalService(),
  });

  if (!data || data?.data === null) return { title: "500" }
  if (data?.data.length === 0) return {
    title: "Не найдена HOME страница"
  };
  const [page] = data.data

  return {
    title: page.metaData.metaTitle,
    description: page.metaData.metaDescription,
    icons: {
      icon: getImageHelper(global.data.favicon) || "/favicon.ico"
    },
  }
}
export default async function HomePage() {

  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery({
    queryKey: ['home'],
    queryFn: () => pageService(),
  });

  const global = await queryClient.fetchQuery({
    queryKey: ['global'],
    queryFn: () => globalService(),
  });

  // return (
  //   <pre className="bg-black text-white overflow-auto max-h-screen">
  //     {JSON.stringify(global, null, 2)}
  //   </pre>
  // )

  if (!data || data?.data === null) return <>505</>
  if (data?.data.length === 0) return <HomeNotFoundMessage />
  const [page] = data.data


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home page={page} global={global} />
    </HydrationBoundary>
  );
}
