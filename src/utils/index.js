import moment from 'moment';

export const convertStrToDate = strDate => {
  return moment(strDate).format('MMM Do YYYY');
};

export const getImageUrl = (imgConfig, path, isLogo = true) => {
  const baseUrl = imgConfig?.secure_base_url || 'https://image.tmdb.org/t/p/';
  let size = imgConfig?.logo_sizes ? imgConfig?.logo_sizes[Math.ceil(imgConfig?.logo_sizes.length / 2)] : 'w185';
  if (!isLogo) {
    size = imgConfig?.backdrop_sizes
      ? imgConfig?.backdrop_sizes[Math.ceil(imgConfig?.backdrop_sizes.length / 2)]
      : 'w300';
  }
  return `${baseUrl}${size}${path}`;
};

export const getGenreNames = (genresConfig, ids) => {
  const result = [];
  if (genresConfig) {
    for (let index = 0; index < ids.length; index += 1) {
      const filtered = genresConfig.filter(item => item.id === ids[index]);
      result.push(filtered[0]);
    }
    return result.map(item => item?.name || '');
  }
  return result;
};
