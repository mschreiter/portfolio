const imageLoader = ({
  src,
  width,
}: {
  src: string;
  width: number;
}): string => {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  return `${basePath}${src}?w=${width}`;
};

export default imageLoader;
