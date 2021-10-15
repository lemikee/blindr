import axios from 'axios';

export const patchProfile = (userId, profileData) => (
  axios.patch(`/api/users/updateProfile/${userId}`, profileData)
);

export const showProfile = (userId) => (
  axios.get(`/api/users/getProfile/${userId}`)
)

export const getCards = (userId) => (
  axios.get(`/api/users/findRecs/${userId}`)
)