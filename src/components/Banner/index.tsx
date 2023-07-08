import { memo } from 'react';
import * as S from './styles';

const Banner = () => (
  <S.Container>
    <S.Wrapper>
      <h1>
        Menos Conversinha,
        <strong>Mais Conversão</strong>
      </h1>

      <p>
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio
      </p>
    </S.Wrapper>
  </S.Container>
);

export default memo(Banner);
