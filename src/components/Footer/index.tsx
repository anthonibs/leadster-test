import Link from 'next/link';

import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

import * as S from './styles';

import Brand from '../Brand';

const Footer = () => {
  return (
    <S.Container>
      <S.Box>
        <S.Wrapper>
          <S.ContainerBrand>
            <Brand href='/' gifAnimation />
            <p>Transformando visitantes em clientes.</p>
          </S.ContainerBrand>

          <S.Navigation>
            <div aria-labelledby='main-links'>
              <h2 id='main-links'>Links Principais</h2>
              <ul>
                <li>
                  <Link href={'/'}>Home</Link>
                </li>
                <li>
                  <Link href={'#'}>Ferramenta</Link>
                </li>
                <li>
                  <Link href={'#'}>Preços</Link>
                </li>
                <li>
                  <Link href={'#'}>Contato</Link>
                </li>
              </ul>
            </div>

            <div aria-labelledby='cases'>
              <h2 id='cases'>Cases</h2>
              <ul>
                <li>
                  <Link href={'#'}>Geração de Leads B2B</Link>
                </li>
                <li>
                  <Link href={'#'}>Geração de Leads em Software</Link>
                </li>
                <li>
                  <Link href={'#'}>Geração de Leads em Imobiliária</Link>
                </li>
                <li>
                  <Link href={'#'}>Cases de Sucesso</Link>
                </li>
              </ul>
            </div>

            <div aria-labelledby='materials'>
              <h2 id='materials'>Materiais</h2>
              <ul>
                <li>
                  <Link href={'#'}>Blog</Link>
                </li>
                <li>
                  <Link href={'#'}>Parceria com Agências</Link>
                </li>
                <li>
                  <Link href={'#'}>Guia Definitivo do Marketing</Link>
                </li>
                <li>
                  <Link href={'#'}>Materiais Gratuitos</Link>
                </li>
              </ul>
            </div>

            <div aria-labelledby='social-media'>
              <h2 id='social-media'>Siga a Leadster</h2>
              <div className='social-media'>
                <a
                  href='https://www.linkedin.com/company/leadster-platform/'
                  target='_blank'
                  aria-label='Linkedin'
                >
                  <span>
                    <FaLinkedinIn />
                  </span>
                </a>
                <a
                  href='https://www.facebook.com/leadsterplatform'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <span>
                    <FaFacebookF />
                  </span>
                </a>
                <a
                  href='https://www.instagram.com/leadster.com.br/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <span>
                    <FaInstagram />
                  </span>
                </a>
              </div>

              <address>
                <p>
                  E-mail: <a href='mailto:contato@leadster.com.br'>contato@leadster.com.br</a>
                </p>
                <p>
                  Telefone: <span>(42) 98828-9851</span>
                </p>
              </address>
            </div>
          </S.Navigation>
        </S.Wrapper>
      </S.Box>

      <S.Wrapper>
        <S.Footer>
          <p>
            Copyright © 2015 - 2022 Todos os direitos reservados | <a href='#'>Leadster</a>
          </p>
          <p>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{' '}
            <Link href='#'>Termos de uso</Link> | <Link href='#'>Privacidade</Link>
          </p>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
