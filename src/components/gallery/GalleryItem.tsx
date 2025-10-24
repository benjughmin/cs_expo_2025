type ImageProps = {
  photo: string
}

export function GalleryItem({ photo }: ImageProps) {
  return (
    <div className="relative mx-2 h-[400px] w-[400px]">
      <img
        src="/gallery/images/image-container.png"
        alt="Container"
        className="pointer-events-none absolute inset-0 h-full w-full"
        draggable="false"
      />

      <div className="absolute inset-0 top-8 flex w-full justify-center">
        <img
          src={photo}
          alt="Image"
          className="h-[calc(100%-7px)] w-[calc(100%-12px)] object-cover"
          draggable="false"
        />
      </div>
    </div>
  )
}
