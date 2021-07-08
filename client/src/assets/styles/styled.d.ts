import 'styled-components';

interface BreakpointSizes {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
}

interface Breakpoints extends Array<string> {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
}

interface ColorType {
  lightest?: string;
  lighter?: string;
  light: string;
  main?: string;
  primary?: string;
  dark: string;
  darker?: string;
  darkest?: string;
}

interface TextType {
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: BreakpointSizes;
    mediaQueries: {
      min: BreakpointSizes;
      max: BreakpointSizes;
    };

    colors: {
      primary: string; // 녹색
      secondary: string; // 갈색
      success: string; // 파란색
      info: string; // 보라색
      warning: string; // 노란색
      error: string; // 빨강색
      greys: {
        black: string;
        grey1: string;
        grey2: string;
        white: string;
      };
    };
  }
}
