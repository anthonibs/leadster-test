import { Rating } from 'react-simple-star-rating';

import * as S from './styles';
import { memo } from 'react';

const comprativoCTA = 'assets/images/comparativo_img_CTA.png';
const seloRD = 'assets/images/selo_RD.png';

const BannerFooter = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Wrapper>
          <S.Figure>
            <S.Image src={comprativoCTA} alt='' loading='lazy' />
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
                <img src={seloRD} alt='Top App mais usados RD Station' />
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
};

export default memo(BannerFooter);
