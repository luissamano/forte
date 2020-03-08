import * as moment from 'moment';

export const dateFormat = value => {
  const newValue = value.split('/');
  const day = newValue[0];
  const month = newValue[1];
  const year = newValue[2];

  return new Date(year, month - 1, day);
};

export const dateFormat2 = value => {
  return new Date(moment(value).format('L'));
};
