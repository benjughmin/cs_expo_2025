type ImageProps = {
  photo: string
}

export function GalleryItem({ photo }: ImageProps) {
  return (
    <div className="w-full">
      <img
        src={photo}
        alt="Gallery image"
        draggable={false}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-2xl object-cover select-none"
      />
    </div>
  )
}
