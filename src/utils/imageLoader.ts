const imageLoader = ({
  src,
  width,
}: {
  src: string;
  width: number;
}): string => {
  const basePath = "";
  return `${basePath}${src}?w=${width}`;
};

export default imageLoader;
