export const dateFormat = value => {
  const newValue = value.split('/');
  const day = newValue[0];
  const month = newValue[1];
  const year = newValue[2];

  return new Date(year, month - 1, day);
};
