import { useEffect, useState } from 'react';

interface Props {
  IMAGES: string[];
}
function ImageSlider({ IMAGES }: Props) {
  const getNumberOfItems = () => {
    if (window.innerWidth >= 1280) return 5; //extra large screens
    if (window.innerWidth >= 1024) return 3; // Large screens
    if (window.innerWidth >= 768) return 3; // Medium screens
    return 2; // Default/small screens
  };
  const [dividedImages, setDividedImages] = useState<string[][]>([[]]);
  const [numberOfItems, setNumberOfItems] =
    useState<number>(getNumberOfItems());

  const divideImages = (images: string[], numCols: number) => {
    const dividedImages = Array.from({ length: numCols }, () => [] as string[]);
    images.forEach((image, index: number) => {
      dividedImages[index % numCols].push(image);
    });
    return dividedImages;
  };

  useEffect(() => {
    const handleResize = () => {
      setNumberOfItems(getNumberOfItems());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setDividedImages(divideImages(IMAGES, numberOfItems));
  }, [IMAGES, numberOfItems]);

  return (
    <>
      <div className="flex gap-x-5 px-5">
        {dividedImages &&
          dividedImages.map((images, colIndex) => (
            <div className="flex flex-col">
              <div
                className={`images ${colIndex % 2 === 0 ? 'animate-marqueeDown' : 'animate-marqueeUp'}`}
                key={colIndex}
              >
                {images.map((image, imgIndex) => (
                  <img
                    className="pt-5"
                    src={image}
                    key={imgIndex}
                    alt={`image-${imgIndex}`}
                    loading="lazy"
                  />
                ))}
              </div>
              <div
                aria-hidden={true}
                className={`images ${colIndex % 2 === 0 ? 'animate-marqueeDown' : 'animate-marqueeUp'}`}
                key={colIndex}
              >
                {images.map((image, imgIndex) => (
                  <img
                    className="pt-5"
                    src={image}
                    key={imgIndex}
                    alt={`image-${imgIndex}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ImageSlider;
