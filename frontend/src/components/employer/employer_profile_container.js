import { connect } from 'react-redux';
import { getEmployer } from '../../actions/employer_actions';
import EmployerProfile from './employer_profile';

const mapStateToProps = state => {
    return {
        info: state.entities.employers,
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEmployer: (employerId) => dispatch(getEmployer(employerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerProfile);