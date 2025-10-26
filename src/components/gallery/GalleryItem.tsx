import { useState } from "react"

type ImageProps = {
  photo: string
}

export function GalleryItem({ photo }: ImageProps) {
  return (
    <div className="relative mx-2 inline-block w-[90vw] max-w-[580px] align-top">
      <img
        src="/gallery/images/image-container.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute inset-0 z-0 h-full w-[95vw] select-none"
      />

      <div className="relative z-10 box-border px-4 pt-11 pb-3">
        <img
          src={photo}
          alt="Image"
          draggable={false}
          className="block h-auto w-full object-cover select-none"
        />
      </div>
    </div>
  )
}
