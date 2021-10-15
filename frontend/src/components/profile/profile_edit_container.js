import { connect } from "react-redux";
import ProfileForm from "./profile_form/profile_form";
import { updateProfile, getProfile } from "../../actions/user_actions"

const mapStateToProps = (state, ownProps) => {
    return {
        histroy: ownProps.histroy,
        currentUser: state.session.user,
        userInfo: state.entities.user,
        formType: 'Edit your profile'
    }
};

const mapDispatchToProps = dispatch => ({
    updateProfile: (userId, profileData) => dispatch(updateProfile(userId, profileData)),
    getProfile: (userId) => dispatch(getProfile(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);