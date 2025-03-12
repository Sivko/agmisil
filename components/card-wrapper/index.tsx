import { IBlock } from "@/types/IBlock"

export default function CardWrapper({ children, ...props }: IBlock & { children: React.ReactNode }) {

  const background = "/frames/two.png"

  return (<div
    style={props.blockName == "card-top-text" ? { backgroundImage: `url(${background})` } : {}}
    className="max-w-[400px] mx-auto h-[564px] text-white rounded-3xl overflow-hidden"
  >
    {children}
  </div>)
}