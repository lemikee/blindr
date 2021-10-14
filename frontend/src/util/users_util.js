import axios from 'axios';

export const patchProfile = (userId, profileData) => (
  axios.patch(`/api/users/updateProfile/${userId}`, profileData)
);