import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getUserMatches } from '../../actions/match_actions'

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => {
    
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        matches: state.entities.matches
    };
};

const mapDispatchToProps = dispatch => ({
    getUserMatches: (userId) => dispatch(getUserMatches(userId)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);