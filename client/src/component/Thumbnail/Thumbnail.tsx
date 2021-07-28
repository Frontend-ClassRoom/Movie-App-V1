import React from 'react';
import { ThumbnailBox } from './Styled';

interface ThumbnailProps {
  width: number;
  thumbnailUrl: string;
  className?: string;
}

const Thumbnail = ({ width, thumbnailUrl, className = '' }: ThumbnailProps) => {
  const BACKDROP_PATH = `https://image.tmdb.org/t/p/w500`;

  return (
    <ThumbnailBox className={className}>
      {thumbnailUrl ? (
        <img src={`${BACKDROP_PATH}/${thumbnailUrl}`} alt="영화 이미지" />
      ) : (
        <img
          src={`https://via.placeholder.com/${width}x${width / 2}`}
          alt="임시 이미지"
        />
      )}
    </ThumbnailBox>
  );
};

export default Thumbnail;
