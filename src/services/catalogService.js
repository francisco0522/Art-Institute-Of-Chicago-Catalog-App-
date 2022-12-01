import axios from 'axios';

export const getCatalog = (page, limit) => {
  return axios
    .get(
      'https://api.artic.edu/api/v1/artworks?page=' +
        page +
        '&limit=' +
        limit * 10 +
        '&fields=id,title,thumbnail,image_id',
    )
    .then(res => res.data.data)
    .catch(err => console.log(err));
};

export const getArtwork = id => {
  return axios
    .get('https://api.artic.edu/api/v1/artworks/' + id)
    .then(res => res.data.data)
    .catch(err => console.log(err));
};

export const getFavorites = ids => {
  return axios
    .get('https://api.artic.edu/api/v1/artworks?ids=' + ids)
    .then(res => res.data.data)
    .catch(err => console.log(err));
};
