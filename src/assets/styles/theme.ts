/**
 * @description
 * 앱 기본 범위 정하기, 반응형 구간 정하기 => 원묵선임님 확인받기
 */
const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
};

const theme = {
  primaryColors: {
    dkGreyBg: "#f2f1f0", // background
    dkFontColor: "#333", // font color
  },
  breakpoints: {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
  },
};

export default theme;
