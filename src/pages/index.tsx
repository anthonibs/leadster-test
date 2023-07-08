import { useCallback, useEffect, useMemo, useState } from 'react';

import api from '@src/services/api';

import { IVideoPost } from '@src/interfaces/IVideoPost';

import Banner from '@src/components/Banner';
import BannerFooter from '@src/components/Banner/BannerFooter';
import Card from '@src/components/Card';
import SkeletonCustom from '@src/components/SkeletonCustom';
import Tags from '../components/Tags';
import ModalOverlay from '@src/components/ModalOverlay';

import * as S from '../pageStyles/Home/styles';

const Home = () => {
  const [videoPost, setVideoPost] = useState<IVideoPost[]>([]);
  const [passPage, setPassPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const [tags, setTags] = useState<IVideoPost[]>([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [propertyData, setPropertyData] = useState({} as IVideoPost);

  const fetchVideoPost = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get<IVideoPost[]>(
        `videos?_page=${passPage}&_limit=9${
          selectedTag && `&tag_slug=${selectedTag}`
        }&_sort=data_create&_order=${selectedDate ? selectedDate : 'desc'}`
      );
      setVideoPost(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [passPage, selectedTag, selectedDate]);

  const fetchVideoTag = useCallback(async () => {
    try {
      const { data } = await api.get<IVideoPost[]>('videos');
      setTags(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  function removeDuplicateItems(items: IVideoPost[]) {
    return items.filter((item, index, self) => {
      return (
        index === self.findIndex((i) => i.tag_slug.toLowerCase() === item.tag_slug.toLowerCase())
      );
    });
  }

  function handleSelectedTag(e: React.MouseEvent<HTMLButtonElement>): void {
    const target = e.target as HTMLElement;
    const tagValue = target.getAttribute('data-value')?.toLowerCase();

    if (tagValue === undefined) return;

    setSelectedTag(tagValue);

    if (selectedTag === tagValue) {
      setSelectedTag('');
    }
  }

  function handlePassPage(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    const tagValue = target.dataset.page;
    setPassPage(Number(tagValue));
  }

  const filterPost = useMemo(() => {
    if (!selectedTag) {
      return videoPost;
    }

    return videoPost.filter((video: IVideoPost) => video.tag_slug.toLowerCase() === selectedTag);
  }, [selectedTag, videoPost]);

  const uniqueTags = removeDuplicateItems(tags);

  useEffect(() => {
    fetchVideoTag();
    fetchVideoPost();
  }, [fetchVideoTag, fetchVideoPost]);

  return (
    <main>
      <Banner />

      <ModalOverlay propertyData={propertyData} openModal={openModal} setOpenModal={setOpenModal} />

      <S.ContainerSection>
        <header className='filter-header'>
          <Tags tags={uniqueTags} selectedTag={selectedTag} handleSelectedTag={handleSelectedTag} />

          <S.SortGroup>
            <span>Ordenar por</span>
            <select
              name=''
              id=''
              defaultValue={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value=''>Data de Publicação</option>
              <option value='desc'>Mais recente</option>
              <option value='asc'>Mais antiga</option>
            </select>
          </S.SortGroup>
        </header>

        <S.Grid>
          {!loading
            ? filterPost.map((data) => (
                <Card
                  key={`${data.id}-${data.tag_slug}`}
                  data={data}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  setPropertyData={setPropertyData}
                />
              ))
            : Array(9)
                .fill(9)
                .map((_, index) => (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                    <SkeletonCustom count={3} width='100%; 150, 240px' height={'190'} />
                  </div>
                ))}
        </S.Grid>

        <footer className='pages-footer'>
          <div>
            <p>Página</p>

            <ul>
              <li>
                <button
                  onClick={handlePassPage}
                  className={passPage === 1 ? 'active' : ''}
                  data-page={1}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  onClick={handlePassPage}
                  className={passPage === 2 ? 'active' : ''}
                  data-page={2}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  onClick={handlePassPage}
                  className={passPage === 3 ? 'active' : ''}
                  data-page={3}
                >
                  3
                </button>
              </li>
              <li>
                <button
                  onClick={handlePassPage}
                  className={passPage === 4 ? 'active' : ''}
                  data-page={4}
                >
                  4
                </button>
              </li>
            </ul>
          </div>
        </footer>
      </S.ContainerSection>

      <BannerFooter />
    </main>
  );
};

export default Home;
