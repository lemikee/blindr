import axios from 'axios';

export const patchProfile = (userId, profile) => (
  axios.patch( `/api/users/updateProfile/${userId}`, profile)
);