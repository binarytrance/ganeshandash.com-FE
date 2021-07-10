/**
 * @param {Number} fontSize font size is to be passed without the px suffix to get a rem value and a also a px fallback. converts px values to rem. rem ensure better accessibility
 * @return { a string with font sizes in px and rem}
 */
export const PxToRem = (props) => `${props / 16}rem`;
