import { connect } from "react-redux";
import { getProfile } from "../../actions/user_actions";
import Profile from "./profile";


const mapStateToProps = state => ({
  currentUser: state.session.user,
  userInfo: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  getProfile: (userId) => dispatch(getProfile(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);