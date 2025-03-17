import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function RichText({ text }: { text: string }) {
  return (<Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>)

}