import { css } from 'styled-components';

export const visuallyHidden = css`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute !important;
`;

export const ellipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
};

export const multipleEllipsis = (line: number): string => {
  return `
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    -webkit-line-clamp: ${line};
  `;
};

export const isValidCSSHex = (hex: string): any => {
  // matches 6 digit characters prefixed with a '#'.
  return /^#[0-9A-F]{6}$/i.test(hex);
};

export const hexTorgba = (hex: string, alpha: number): any => {
  if (!isValidCSSHex(hex)) {
    return '';
  }

  const [r, g, b]: any = hex.match(/\w\w/g)?.map((h) => parseInt(h, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha || 1})`;
};

export const transformEm = (px: number, fontSize?: number): string => {
  const baseFontSize = 16;
  const size = fontSize || baseFontSize;
  return `${px / size}em`;
};

export const transformRem = (px: number): string => {
  const size = 16;
  return `${px / size}rem`;
};

export const transformPx = (em: number, fontSize?: number): string => {
  const baseFontSize = 16;
  const size = fontSize || baseFontSize;
  return `${size * em}px`;
};

export const mediaQueriesMax = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

export const mediaQueriesMin = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key] + 1}px) { ${style} }`;
};
