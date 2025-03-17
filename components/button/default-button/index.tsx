import { Button } from "@/types/IPage";

export default function DefaultButton(props: Button) {

  return (<button>
    {props.text && <h2 className="italic text-lg leading-5">{props.text}</h2>}
  </button>)

}