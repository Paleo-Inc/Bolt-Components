import React, { useEffect, useState } from "react";

const CustomImage = ({ src, defaultSrc, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  return (
    <img
      onError={() => {
        // this will run when image link is broken
        setImgSrc(defaultSrc);
      }}
      {...props}
      src={imgSrc}
    />
  );
};

export default CustomImage;
