import axios from 'axios';

export const getEmployer = (employerId) => {
  return axios.get(`/api/employers/employerProfile/${employerId}`);
};

export const registerEmployer = (empData) => {
  return axios.post('api/employers/register', empData);
};

export const postJob = (job) => {
  return axios.post('api/jobs/postJob', job);
}