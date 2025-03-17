import axios from "axios";
import * as qs from "qs"
import shema from "@/shema/global.json"
import { IRootGlobal } from "@/types/IGlobal";

export async function globalService(): Promise<IRootGlobal> {
  const params = qs.stringify(shema, { encode: false, arrayFormat: 'brackets' });
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/global?${params}`)
  return res.data
}