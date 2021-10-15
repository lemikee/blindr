import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getUserMatches } from '../../actions/match_actions'

import NavBar from './navbar';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user
    };
};

const mapDispatchtoProps = dispatch => ({
    getUserMatches: (userId) => dispatch(getUserMatches(userId))
})

export default connect(mapStateToProps, mapDispatchtoProps)(NavBar);