import { IVideoPost } from '@src/interfaces/IVideoPost';

import * as S from './styles';

import MyButton from '@src/components/Button/MyButton';

interface TagsProps {
  tags: IVideoPost[];
  selectedTag: string;
  handleSelectedTag: (e: React.MouseEvent<HTMLElement>) => void;
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
