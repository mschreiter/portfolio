export default function imageLoader({ src }: { src: string }): string {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  return `${basePath}${src}`;
}
