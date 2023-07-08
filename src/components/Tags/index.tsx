import React from 'react';

import { IVideoPost } from '@src/interfaces/IVideoPost';

import MyButton from '@src/components/Button/MyButton';

import * as S from './styles';

interface TagsProps {
  tags: IVideoPost[];
  selectedTag: string;
  handleSelectedTag: React.MouseEventHandler<HTMLButtonElement>;
}

const Tags = ({ tags, selectedTag, handleSelectedTag }: TagsProps) => {
  return (
    <S.Tags className='tags'>
      {tags?.map((tag) => (
        <MyButton
          key={tag.tag_slug}
          data-value={tag.tag_slug}
          onClick={handleSelectedTag}
          className={tag.tag_slug.toLowerCase() === selectedTag ? 'active' : ''}
        >
          {tag.tag.toLocaleLowerCase()}
        </MyButton>
      ))}
    </S.Tags>
  );
};

export default Tags;
