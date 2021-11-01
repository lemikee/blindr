import { fetchChat, patchChat } from "../util/chats_util";

export const RECEIVE_CHAT = "RECEIVE_CHAT";

const receiveChat = ({ chat }) => ({
  type: RECEIVE_CHAT,
  chat
})

export const getChatMessages = (userId, jobId) => dispatch => fetchChat(userId, jobId)
  .then( payload => dispatch(receiveChat(payload.data)))

export const sendMessage = (data) => dispatch => patchChat(data)
  .then( payload => dispatch(receiveChat(payload.data)))