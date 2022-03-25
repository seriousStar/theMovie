import moment from 'moment';

export const convertStrToDate = (strDate) => {
  return moment(strDate).format('MMM Do YYYY')
};
