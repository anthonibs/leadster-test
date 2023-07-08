import { memo } from 'react';
import Image from 'next/image';

import { Rating } from 'react-simple-star-rating';

import * as S from './styles';

const comprativoCTA = '/assets/images/comparativo_img_CTA.png';
const seloRD = '/assets/images/selo_RD.png';

const BannerFooter = () => (
  <S.Container>
    <S.Box>
      <S.Wrapper>
        <S.Figure>
          <Image src={comprativoCTA} alt='' loading='lazy' width={450} height={430} />
        </S.Figure>
      </S.Wrapper>

      <S.Wrapper>
        <S.HeaderTitle aria-labelledby='leades_cta'>
          <h2>
            Pronto para triplicar sua
            <strong>Geração de Leades?</strong>
          </h2>
          <p>
            Criação e ativação em <strong>4 minutos.</strong>
          </p>
        </S.HeaderTitle>

        <S.ControlCTA id='leades_cta'>
          <div>
            <S.MyButton>Ver Demonstração</S.MyButton>
            <figure>
              <Image src={seloRD} alt='Top App mais usados RD Station' width={120} height={120} />
            </figure>
          </div>

          <p>
            <strong className='card-icon'>Não</strong> é necessário Cartão de Crédito |
            <Rating initialValue={4.9} size={16} readonly /> <strong>4.9/5</strong> média de
            satisfação
          </p>
        </S.ControlCTA>
      </S.Wrapper>
    </S.Box>
  </S.Container>
);

export default memo(BannerFooter);
