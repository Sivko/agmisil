import { Button } from "@/types/IPage";
import IconTextButton from "./icon-text-button";

// const templates = {
//   "default": "",
//   "icon": "",
//   "text": ""
//   "iconText": ""
// }

export default function ButtonComponent(props: Button) {
  console.log(props.type)
  return (<IconTextButton {...props} />)
}