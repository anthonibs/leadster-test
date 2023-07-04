import { memo } from 'react';

import { IVideoPost } from '@src/interfaces/IVideoPost';

import * as S from './styles';

const thumbnail = 'assets/images/thumbnail.png';

interface CardProps {
  data: IVideoPost;
}

const Card = ({ data }: CardProps) => {
  return (
    <S.Container>
      <figure>
        <img src={thumbnail} alt={data.title} />
      </figure>
      <div>
        <h2>{data.title}</h2>
      </div>
    </S.Container>
  );
};

export default memo(Card);
