import { connect } from "react-redux";
import ProfileForm from "./profile_form/profile_form";
import { updateProfile, getProfile } from "../../actions/user_actions"
import { clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        histroy: ownProps.histroy,
        currentUser: state.session.user,
        userInfo: state.entities.user,
        errors: state.errors.profile,
        formType: 'Edit your profile'
    }
};

const mapDispatchToProps = dispatch => ({
    updateProfile: (userId, profileData, history) => dispatch(updateProfile(userId, profileData, history)),
    getProfile: (userId) => dispatch(getProfile(userId)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);