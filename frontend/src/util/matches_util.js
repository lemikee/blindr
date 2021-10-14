import axios from 'axios';

export const postMatch = (matchData) => (
  axios.post('/api/matches/createMatch', matchData)
);

export const destroyMatch = (matchData) => (
  axios.delete(
    `/api/matches/deleteMatch/${matchData.userId}/${matchData.jobId}`)
)