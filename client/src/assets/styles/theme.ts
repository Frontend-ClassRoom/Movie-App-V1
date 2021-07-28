import { hexTorgba } from './utils';

const colors = {
  primary: '#a5d6a7',
  secondary: '#bcaaa4',
  success: '#9ed2f6',
  info: '#e4dfff',
  warning: '#fcdc8b',
  error: '#fb5558',
  greys: {
    black: '#000000',
    grey1: '#2e2d2d',
    grey2: '#666666',
    grey3: '#828181',
    grey4: '#dddddd',
    grey5: '#c9c9c9',
    grey6: '#f7f7f7',
    white: '#ffffff',
  },
};

const baseFont = {
  fontSize: '16px',
  lineHeight: '1.5',
  fontWeight: 'normal',
  fontColor: colors.greys.grey1,
};

const fontSizes = {
  basic: '0.875rem',
  tiny: '0.625rem',
  small: '0.75rem',
  medium: '0.875rem',
  large: '1.125em',
};

const heading = {
  h1: {
    fontSize: '2rem',
    fontWeight: '700',
  },

  h2: {
    fontSize: '1.875rem',
    fontWeight: '700',
  },

  h3: {
    fontSize: '1.75rem',
    fontWeight: '700',
  },

  h4: {
    fontSize: '1.5rem',
    fontWeight: '500',
  },

  h5: {
    fontSize: '1.25rem',
    fontWeight: 'normal',
  },

  h6: {
    fontSize: '1rem',
    fontWeight: 'normal',
  },
};

const borderRadius = {
  default: '0',
  round: '0.375rem',
  circle: '50rem',
};

const buttons = {
  default: {
    bgColor: 'transparent',
    borderColor: 'transparent',
    fontColor: colors.greys.grey1,
  },
  primary: {
    bgColor: colors.primary,
    borderColor: colors.primary,
    fontColor: colors.greys.white,
  },
  secondary: {
    bgColor: colors.secondary,
    borderColor: colors.secondary,
    fontColor: colors.greys.white,
  },
  link: {
    bgColor: 'transparent',
    borderColor: 'none',
    fontColor: colors.primary,
  },
};

const buttonSizes = {
  basic: {
    fontSize: fontSizes.basic,
    padding: '0.25rem 0.5rem',
  },
  tiny: {
    fontSize: fontSizes.tiny,
    padding: '0.25rem 0.5rem',
  },
  small: {
    fontSize: fontSizes.small,
    padding: '0.375rem 0.75rem',
  },
  medium: {
    fontSize: fontSizes.medium,
    padding: '0.5rem 0.875rem',
  },
  large: {
    fontSize: fontSizes.large,
    padding: '0.5rem 1.25rem',
  },
};

const inputs = {
  bgColor: colors.greys.white,
  borderColor: colors.greys.grey3,
  fontColor: colors.greys.grey1,
  padding: '0.25rem 0.5rem',
  focus: {
    bgColor: hexTorgba(colors.primary, 0.5),
    borderColor: colors.primary,
    fontColor: colors.greys.grey1,
  },
  checked: {
    bgColor: hexTorgba(colors.primary, 0.5),
    borderColor: colors.primary,
    fontColor: colors.greys.grey1,
  },
  disabled: {
    bgColor: colors.greys.grey5,
    borderColor: colors.greys.grey4,
    fontColor: colors.greys.grey4,
  },
  error: {
    bgColor: hexTorgba(colors.error, 0.5),
    borderColor: colors.error,
    fontColor: colors.error,
  },
};

export const theme = {
  colors,
  baseFont,
  fontSizes,
  heading,
  borderRadius,
  buttonSizes,
  buttons,
  inputs,
};

export default theme;
