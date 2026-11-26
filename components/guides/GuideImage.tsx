import Image from "next/image";

type GuideImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export default function GuideImage({
  src,
  alt,
  width,
  height,
  caption,
}: GuideImageProps) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 960px"
        className="block h-auto w-full rounded-lg"
      />

      {caption && (
        <figcaption className="mt-2 text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}