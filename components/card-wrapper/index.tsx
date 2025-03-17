export default function CardWrapper({ children, media }: { children: React.ReactNode, media?: string | undefined }) {

  return (<div
    style={media ? { backgroundImage: `url(${media})` } : {}}
    className="w-[400px] mx-auto min-h-[564px] text-white rounded-3xl overflow-hidden"
  >
    {children}
  </div>)
}