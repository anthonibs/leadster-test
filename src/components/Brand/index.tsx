import Link from 'next/link';

import * as S from './styles';

const logo = 'assets/images/logo.png';
const logoGif = 'assets/images/leadster-animado.gif';

interface BrandProps {
  href?: string;
  gifAnimation?: boolean;
}

const Brand = ({ href, gifAnimation = false }: BrandProps) => {
  const isGif = gifAnimation ? logoGif : logo;

  if (!href) {
    return (
      <S.Logo>
        <S.Image src={isGif} alt='Logo Leadster' />
      </S.Logo>
    );
  }

  return (
    <Link href={href}>
      <S.Logo>
        <S.Image src={isGif} alt='Logo Leadster' />
      </S.Logo>
    </Link>
  );
};

export default Brand;
