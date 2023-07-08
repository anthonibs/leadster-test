import React, { useCallback, useEffect, useRef } from 'react';

import { IVideoPost } from '@src/interfaces/IVideoPost';

import DownloadFileButton from '../Button/DownloadFileButton';

import { IoCloseOutline } from 'react-icons/io5';

import * as S from './styles';

interface ModalOverlayProps {
  propertyData: IVideoPost;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalOverlay = ({ openModal, setOpenModal, propertyData }: ModalOverlayProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal, setOpenModal]);

  const handleCloseModal = useCallback(
    (evt: KeyboardEvent): void => {
      if (!openModal) {
        return;
      }

      if (evt.code === 'Escape') {
        setOpenModal(false);
      }
    },
    [openModal, setOpenModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <S.Container className={openModal ? 'active' : ''} ref={modalRef}>
      <dialog open={openModal}>
        <header className='dialog-header'>
          <h2>
            <span>Webinar: </span>
            {propertyData.title}
          </h2>

          <button className='close-modal' aria-label='Fechar Modal' onClick={handleOpenModal}>
            <IoCloseOutline />
          </button>
        </header>

        <div className='dialog-video'>
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${propertyData.video}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>

        <div className='dialog-content'>
          <h3>Descrição</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quaerat? Accusantium,
            libero. Provident officiis similique rerum a.
          </p>
        </div>

        <footer className='dialog-footer'>
          <h3>Downloads</h3>
          <div>
            <DownloadFileButton title={'Spreadsheet.xls'} />
            <DownloadFileButton title={'Document.doc'} />
            <DownloadFileButton title={'Presentation.ppt'} />
          </div>
        </footer>
      </dialog>

      <div className='more-files'>
        <DownloadFileButton title={'Spreadsheet.xls'} />
        <DownloadFileButton title={'Document.doc'} />
        <DownloadFileButton title={'Presentation.ppt'} />
        <DownloadFileButton title={'Folder.zip'} />
      </div>
    </S.Container>
  );
};

export default ModalOverlay;
