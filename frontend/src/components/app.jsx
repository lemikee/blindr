import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import SplashPage from './splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import RecsContainer from './recs/recs_container';
import ProfileEditContainer from './profile/profile_edit_container';
import ProfileCreateContainer from './profile/profile_create_container';
import ProfileContainer from './profile/profile_container';
import MatchesContainer from './matches/matches_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={SplashPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/recs" component={RecsContainer} />
            
            <Redirect to="/recs" />
        </Switch>
    </div>
);

export default App;