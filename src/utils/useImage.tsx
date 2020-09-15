import React, { useEffect, useState } from "react";

export interface FetchedImage {
  Title: string;
  Subtitle: string;
  ImageUrl: string;
}

export interface ImageInterface {
  images: FetchedImage[] | null;
  error: boolean;
}

export type FetchLoading = boolean;
const useImage = (): [ImageInterface | null, FetchLoading] => {
  const [images, setImages] = useState<ImageInterface | null>(null);
  const [loading, setLoading] = useState<FetchLoading>(false);

  const assertErrors = () => {
    setLoading(false);
    setImages({
      images: null,
      error: true,
    });
  };

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
      );
      const responseImages = await response.json();
      setLoading(false);
      if (!responseImages.Errors.length) {
        setImages({
          images: responseImages.Details,
          error: false,
        });
      } else {
        assertErrors();
      }
    } catch (err) {
      console.log(err);
      assertErrors();
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return [images, loading];
};

export default useImage;
