import { type ImgHTMLAttributes } from "react"

import { ICONS } from "./consts"

type IconSrc = (typeof ICONS)[keyof typeof ICONS]

type IconProps = ImgHTMLAttributes<HTMLImageElement> & {
    src: IconSrc
    size?: number | string
}

export default function Icon({ src, size, className = "", alt = "", ...props }: IconProps) {
    return <img src={src} alt={alt} width={size} height={size} className={className} {...props} />
}
