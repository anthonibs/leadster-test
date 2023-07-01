import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      primary: string;
      secondary: string;
      third: string;
      fourth: string;
      fifth: string;
    };
  }
}
