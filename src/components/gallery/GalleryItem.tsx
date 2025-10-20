type ImageProps = {
  photo: string
}

export function GalleryItem({ photo }: ImageProps) {
  return (
    <div className="relative mx-2 h-[300px] w-[300px]">
      <img
        src="/gallery/images/image-container.png"
        alt="Container"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="absolute inset-0 top-8 flex w-full justify-center">
        <img
          src={photo}
          alt="Image"
          className="h-[calc(100%-7px)] w-[calc(100%-12px)] object-cover"
        />
      </div>
    </div>
  )
}
