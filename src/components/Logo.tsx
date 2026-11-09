import brand from "@/generated/brand.json";

type Variant = "primary" | "primaryOnDark" | "primarySlogan";

/** Renders a supplied brand SVG exactly as-is. Width/height come from the file's viewBox. */
export function Logo({
  variant,
  className,
  alt = "Three Guys",
  priority = false,
}: {
  variant: Variant;
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  const { src, width, height } = brand[variant];
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
