import { connect } from "react-redux";
import ProfileForm from "./profile_form";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateProfile: data => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);