import axios from 'axios';

export const patchProfile = (userId, profileData) => {
  console.log(profileData);
  axios.patch(`/api/users/updateProfile/${userId}`, profileData)
};