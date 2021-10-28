import { connect } from "react-redux";
import ProfileCreatePage from "./profile_create_page";



const mapStateToProps = state => {
  console.log(state.errors.profile)
  return {
    errors: state.errors.profile
  }

};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCreatePage);