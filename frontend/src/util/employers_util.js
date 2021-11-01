import axios from 'axios';

export const getEmployer = (employerId) => {
  return axios.get(`/api/employerProfile/${employerId}`);
};