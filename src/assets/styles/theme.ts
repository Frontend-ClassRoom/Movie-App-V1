const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
};

const theme = {
  breakpoints: breakpoints,
  mediaQueries: {
    min: {
      mobileS: `@media screen and (min-width: ${breakpoints.mobileS})`,
      mobileM: `@media screen and (min-width: ${breakpoints.mobileM})`,
      mobileL: `@media screen and (min-width: ${breakpoints.mobileL})`,
      tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
    },
    max: {
      mobileS: `@media screen and (max-width: ${breakpoints.mobileS})`,
      mobileM: `@media screen and (max-width: ${breakpoints.mobileM})`,
      mobileL: `@media screen and (max-width: ${breakpoints.mobileL})`,
      tablet: `@media screen and (max-width: ${breakpoints.tablet})`,
    },
  },
  colors: {
    primary: '#a5d6a7',
    secondary: '#bcaaa4',
    success: '#9ed2f6',
    info: '#e4dfff',
    warning: '#fcdc8b',
    error: '#fb5558',
    greys: {
      black: '#2e2d2d',
      grey1: '#828181',
      grey2: '#f7f7f7',
      white: '#ffffff',
    },
  },
};

export default theme;
