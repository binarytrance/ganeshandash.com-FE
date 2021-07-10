/**
 * @param {Number} fontSize font size is to be passed without the px suffix to get a rem value and a also a px fallback. converts px values to rem. rem ensure better accessibility
 * @return { a string with font sizes in px and rem}
 */
export const rem = (props) => `font-size: ${props}${`px !important`};
        font-size: ${props / 16}${'rem !important'};
        line-height: ${props + 10}${`px !important`};
        line-height: ${(props + 10) / 16}${`rem !important`};`;

export const typeScale = {
  header1: `${rem(40)}`,
  header2: `${rem(36)}`,
  header3: `${rem(26)}`,
  textLg: `${rem(24)}`,
  textMd: `${rem(20)}`,
  textSm: `${rem(16)}`,
  textXs: `${rem(14)}`,
};
