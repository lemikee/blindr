import { connect } from 'react-redux';
import { getChatMessages, sendMessage } from '../../actions/chat_actions';
import MatchChat from './match_chat';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  match: ownProps.match,
  chat: state.entities.chats[ownProps.match._id] ? state.entities.chats[ownProps.match._id] : []
})

const mapDispatchToProps = dispatch => ({
  getChatMessages: (userId, jobId) => dispatch(getChatMessages(userId, jobId)),
  sendMessage: (data) => dispatch(sendMessage(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchChat);