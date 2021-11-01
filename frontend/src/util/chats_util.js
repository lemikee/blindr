import axios from 'axios';

export const fetchChat = (userId, jobId) => (
  axios.get(`/api/chats/getChat/${userId}/${jobId}`)
)

export const patchChat = (data) => (
  axios.patch(`/api/chats/patchChat/${data.userId}/`, data)
)