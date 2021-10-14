import axios from 'axios';

export const patchProfile = (profileData) => {
  axios.patch('/api/users/updateProfile', profileData)
};