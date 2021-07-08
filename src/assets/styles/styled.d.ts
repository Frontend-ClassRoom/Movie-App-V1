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

interface TextType {
  fontSize: string;
  fontWeight?: string;
  lineHeight: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints;

    mediaQueries: {
      min: BreakpointSizes;
      max: BreakpointSizes;
    };
  }
}
