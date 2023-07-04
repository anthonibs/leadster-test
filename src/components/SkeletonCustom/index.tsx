import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonProps {
  count?: number;
  width?: string | number;
  height?: string | number;
}

const SkeletonCustom = ({ count = 1, width = '100%', height = '16px' }: SkeletonProps) => {
  function parsedConversion(typeConversion: string | number) {
    const parsedConversion =
      typeof typeConversion === 'number' ? `${typeConversion}px` : typeConversion;

    return parsedConversion?.replaceAll(/[,;' ']+/gm, ' ').split(' ');
  }

  function changeConversionPropertyRemover(item: string) {
    return item?.replace(/([\d]+[^%pxrem]+)$/gm, `${item}px`);
  }

  const parseStringWithDelimiters = parsedConversion(width);
  const parseStringHeightDelimiters = parsedConversion(height);

  const skeletonItems = Array.from({ length: count }, (_, i) => {
    return (
      <Skeleton
        key={i}
        height={changeConversionPropertyRemover(parseStringHeightDelimiters[i])}
        width={changeConversionPropertyRemover(parseStringWithDelimiters[i])}
      />
    );
  });

  return skeletonItems;
};

export default SkeletonCustom;
