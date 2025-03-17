import { Favicon } from "@/types/IGlobal";
import { Icon, Media, Media2 } from "@/types/IPage";

export function getImageHelper(image: Media | undefined | Favicon): string | undefined {
  if (image) {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`
  }
  return undefined
}

export function getFirstMediaHelper(media: Media2[] | Media[] | undefined): string | undefined {
  if (media) {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}${media[0].url}`
  }
  return undefined
}


interface IMediaFromImage {
  width: number,
  height: number,
  alt: string,
  src: string
}
export function getFirstMediaToImageHelper(media: Media[] | undefined | Media2[]): IMediaFromImage | undefined {
  if (!media?.length) return undefined
  const { width, height, caption, url } = media[0]
  return {
    width, height, alt: caption || "", src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`
  }
}

export function getIconToImageHelper(icon: Icon): IMediaFromImage | undefined {
  if (!icon) return undefined
  const { width, height, caption, url } = icon
  return {
    width, height, alt: caption || "", src: `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`
  }
}