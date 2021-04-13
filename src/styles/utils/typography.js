/**
 * @param {Number} fontSize font size is to be passed without the px suffix to get a rem value and a also a px fallback. converts px values to rem. rem ensure better accessibility
 * @return { a string with font sizes in px and rem}
 */
export const rem = (props) => `font-size: ${props}${`px !important`};
        font-size: ${props / 16}${'rem !important'};`;

export const typeScale = {
  header1: `${rem(18)}`,
  header2: `${rem(16)}`,
  textLg: `${rem(14)}`,
  textMd: `${rem(12)}`,
  textSm: `${rem(10)}`,
  textXs: `${rem(8)}`,
};
