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
}
interface FormType {
  bgColor: string;
  borderColor: string;
  fontColor: string;
}

interface ButtonSizeType {
  fontSize: string;
  padding: string;
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
        grey2: string;
        white: string;
      };
    };

    baseFont: {
      fontSize: string;
      lineHeight: string;
      fontWeight: string;
    };

    fontSizes: {
      basic: string;
      tiny: string;
      small: string;
      medium: string;
      large: string;
    };

    heading: {
      h1: TextType;
      h2: TextType;
      h3: TextType;
      h4: TextType;
      h5: TextType;
      h6: TextType;
    };

    borderRadius: {
      default: string;
      round: string;
      circle: string;
    };

    buttons: {
      primary: FormType;
      secondary: FormType;
      link: FormType;
    };

    buttonSizes: {
      basic: ButtonSizeType;
      tiny: ButtonSizeType;
      small: ButtonSizeType;
      medium: ButtonSizeType;
      large: ButtonSizeType;
    };

    inputs: {
      bgColor: string;
      borderColor: string;
      fontColor: string;
      padding: string;
      focus: FormType;
      checked: FormType;
      disabled: FormType;
      error: FormType;
    };
  }
}
