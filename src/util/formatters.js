export const decimalFormat = (value, language = 'pt-br') => {
  if (!value) return '-';
  return new Intl.NumberFormat(language, {
    style: 'decimal',
  }).format(value);
};
