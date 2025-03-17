import { IRootPage } from "@/types/IPage";
import axios from "axios";
import * as qs from "qs"
import shema from "@/shema/page.json"

export async function pageService(): Promise<IRootPage> {
  const params = qs.stringify(shema, { encode: false, arrayFormat: 'brackets' });
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/pages?filters[slug][$eq]=index&${params}`)
  return res.data
}