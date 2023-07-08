import { BsCloudDownload } from 'react-icons/bs';

import * as S from './styles';

type FileDownload = 'Spreadsheet.xls' | 'Document.doc' | 'Presentation.ppt' | 'Folder.zip';

interface DownloadFileProps {
  title: FileDownload;
}

const DownloadFileButton = ({ title }: DownloadFileProps) => {
  const fileInfo = {
    'Spreadsheet.xls': {
      color: '#C2F4EA',
      title: 'Spreadsheet.xls',
    },
    'Document.doc': {
      color: '#C2E6FF',
      title: 'Document.doc',
    },
    'Presentation.ppt': {
      color: '#FFF8D0',
      title: 'Presentation.ppt',
    },
    'Folder.zip': {
      color: '#E8EEF3',
      title: 'Folder.zip',
    },
  };

  const file = fileInfo[title];

  return (
    <S.Button color={file.color} aria-label={`Download em ${file.title}`}>
      <span>
        <BsCloudDownload />
      </span>
      <p>{file.title}</p>
    </S.Button>
  );
};

export default DownloadFileButton;
