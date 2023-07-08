# Leadster Practical Test

[![Captura-de-tela-de-2023-07-06-13-23-28.png](https://i.postimg.cc/DzStmCkm/Captura-de-tela-de-2023-07-06-13-23-28.png)](https://postimg.cc/wtdWGQBd)
![GitHub repo size](https://img.shields.io/github/repo-size/anthonibs/leadster-test) ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/anthonibs/leadster-test/main?label=version&labelColor=gray&color=blue)

## 💡Decisão

Decidi utilizar o Axios devido à sua ampla funcionalidade e facilidade de uso para fazer chamadas à API. Com apenas algumas linhas de código, posso criar uma instância e definir uma baseURL. Além disso, optei por seguir a organização de pastas que venho utilizando em meus projetos pessoais em React, separando componentes compartilhados de outros componentes.

Também escolhi utilizar o TypeScript e ferramentas de formatação e padronização do projeto. O TypeScript traz benefícios como verificação de tipos estáticos, que ajuda a evitar erros durante o desenvolvimento, e a padronização do projeto facilita a colaboração com outros desenvolvedores, garantindo que todos estejam alinhados com a estrutura e formato do código.

## 👨‍💻 Visão geral

### 🔗 Acesso a demonstração do projeto

- Você pode acessar o código-fonte do projeto por [baixá-lo](https://github.com/anthonibs/leadster-test/archive/refs/heads/main.zip).
- URL do site ao vivo: adicione o URL do site ao vivo [aqui](https://leadster-test-lilac.vercel.app/).

### 🎆 Funcionalidades

- Filtrar vídeos por tags e datas, permitindo a seleção de vídeos com base em tags específicas e datas recentes ou mais antigas.
- Abrir um modal para exibir conteúdo adicional relacionado aos vídeos.

## 🚀 Desenvolvimento do projeto

Estas instruções fornecerão a você uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste. Consulte a implantação para obter notas sobre a implantação do projeto em um sistema ativo.

### ⚙️ Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos e ferramentas instalados em seu sistema:

- Node.js (versão 18.6.0) e npm (versão 9.6.7) devem estar instalados.
- O Json-server deve estar instalado globalmente em sua máquina.
- Certifique-se de ter um navegador web moderno compatível, como Google Chrome, Mozilla Firefox, Safari, etc.

### 🧰 Construído com

- [Next.Js](https://nextjs.org/) - Framework.
- [Styled-components](https://styled-components.com/) - para estilos.
- [Axios](https://axios-http.com/ptbr/).
- [TypeScript](https://www.typescriptlang.org/).
- Ferramentas para padronização e elegibilidade do código.

### 🪛 Instalação

Faça o clone do repositório do projeto:

```bash
git clone https://github.com/anthonibs/leadster-test.git
```

Navegue até o diretório do projeto:

```bash
cd leadster-test
```

Instale as dependências do projeto:

```bash
npm install
```

Para verificar se o `json-server` está instalado na sua máquina, execute o seguinte comando:

```bash
npm list -g json-server
```

Se o json-server não estiver instalado, execute o seguinte comando para instalá-lo globalmente:

```bash
npm install -g json-server
```

### 🪄 Executando o Projeto

Após concluir a instalação e configuração, você pode executar o projeto da seguinte forma:

Inicie o servidor de desenvolvimento:

```
 npm run dev
```

Abra o seu navegador e acesse `http://localhost:3000` para visualizar o projeto em execução.

Para rodar mockup para alimentar o site:

```
npm run json-server
```

Siga essas etapas para iniciar o servidor de desenvolvimento, abrir o projeto no navegador e executar o mockup para alimentar o site.

## 🧪 Uso/Exemplos

### \_document.tsx

O arquivo \_document.tsx no Next.js permite personalizar o documento HTML inicial enviado ao cliente. A classe MyDocument é uma extensão da classe interna Document e usa a biblioteca styled-components para renderizar estilos no lado do servidor. Isso assegura que os estilos sejam aplicados de forma correta durante a renderização inicial da página, o que torna o desempenho e a otimização para os mecanismos de busca mais eficientes.

```typescript
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
```

A documentação de referência está disponível: [https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/\_document.tsx](https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.tsx)

### SkeletonCustom (index.tsx)

O componente `SkeletonCustom` recebe as propriedades `count`, `width` e `height`. Ele inclui a função `parsedConversion`, que trata a conversão de valores numéricos ou strings em um array de valores.

**Exemplo**:

```typescript
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonProps {
  count?: number;
  width?: string | number;
  height?: string | number;
}

const SkeletonCustom = ({ count = 1, width = '100%', height = '16px' }: SkeletonProps) => {
  function parsedConversion(typeConversion: string | number) {
    const parsedConversion =
      typeof typeConversion === 'number' ? `${typeConversion}px` : typeConversion;

    return parsedConversion?.replaceAll(/[,;' ']+/gm, ' ').split(' ');
  }

  function changeConversionPropertyRemover(item: string) {
    return item?.replace(/([\d]+[^%pxrem]+)$/gm, `${item}px`);
  }

  const parseStringWithDelimiters = parsedConversion(width);
  const parseStringHeightDelimiters = parsedConversion(height);

  const skeletonItems = Array.from({ length: count }, (_, i) => {
    return (
      <Skeleton
        key={i}
        height={changeConversionPropertyRemover(parseStringHeightDelimiters[i])}
        width={changeConversionPropertyRemover(parseStringWithDelimiters[i])}
      />
    );
  });

  return skeletonItems;
};

export default SkeletonCustom;
```

A função `parsedConversion` foi aprimorada para utilizar expressões regulares na divisão da string em um array, levando em consideração diferentes delimitadores, como vírgula, ponto e vírgula e espaços em branco. Isso permite que larguras e alturas sejam definidas separadamente por esses delimitadores.

**Exemplo:**

```typescript
function parsedConversion(typeConversion: string | number) {
  const parsedConversion =
    typeof typeConversion === 'number' ? `${typeConversion}px` : typeConversion;

  return parsedConversion?.replaceAll(/[,;' ']+/gm, ' ').split(' ');
}
```

A função `changeConversionPropertyRemover` procura por um ou mais dígitos seguidos de qualquer caractere que não seja %, px, rem ou em no final da string passada como argumento. Caso essa ocorrência não seja encontrada, a função adiciona 'px' ao final da string para garantir que o valor esteja no formato de unidade de pixels (px).

**Exemplo:**

```typescript
function changeConversionPropertyRemover(item: string) {
  return item?.replace(/([\d]+[^%pxrem]+)$/gm, `${item}px`);
}
```

## 📝 Experiência com o projeto

Após um primeiro contato com o Next.js, percebi uma diferença significativa em relação ao React.js. Mas fiquei interessado nas funcionalidades do Next.js e vou me concentrar em melhorar os meus conhecimentos nessas duas tecnologias. A abordagem de criação de páginas no Next.js, particularmente, me pareceu bastante diferente, o que me motiva a continuar aprofundando meus estudos nessa área.

> "Sonhos rendem boas histórias, mas o que importa mesmo acontece quando
> estamos acordados." - Duna

## ✏️ Autor

[![Profile owner picture Anthoni Broering dos Santos](https://avatars.githubusercontent.com/u/77931577?v=4)
](https://avatars.githubusercontent.com/u/77931577?v=4) [Anthoni Broering dos Santos](https://github.com/anthonibs)

[![top](https://github.githubassets.com/images/icons/emoji/unicode/1f51d.png)  Voltar ao topo](#leadster-practical-test)
