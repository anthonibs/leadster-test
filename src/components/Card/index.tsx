import React, { SetStateAction, memo } from 'react';
import Image from 'next/image';

import { IVideoPost } from '@src/interfaces/IVideoPost';

import * as S from './styles';

const thumbnail = '/assets/images/thumbnail.png';

interface CardProps {
  data: IVideoPost;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPropertyData: React.Dispatch<SetStateAction<IVideoPost>>;
}

const Card = ({ data, openModal, setOpenModal, setPropertyData }: CardProps) => {
  function handleOpenModal() {
    setOpenModal(!openModal);
    setPropertyData(data);
  }

  return (
    <S.Container onClick={handleOpenModal}>
      <figure>
        <Image src={thumbnail} alt={data.title} width={320} height={280} />
      </figure>
      <div>
        <h2>{data.title}</h2>
      </div>
    </S.Container>
  );
};

export default memo(Card);
