import { useState, useEffect } from "react";

export const useProjectGetImage = (imageName: string): string => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (imageName) {
      const path = `/images/${imageName}`;
      
      setImageUrl(path);
    } else {
      setImageUrl("");
    }
  }, [imageName]);
  return imageUrl;
};