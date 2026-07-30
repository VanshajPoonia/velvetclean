import Image from "next/image";
import clsx from "clsx";

export function DuotonePhoto({
  src,
  alt,
  priority,
  sizes = "100vw",
  warm,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  warm?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={clsx("duotone", warm && "duotone--warm", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={clsx("object-cover", imgClassName)}
      />
    </div>
  );
}
