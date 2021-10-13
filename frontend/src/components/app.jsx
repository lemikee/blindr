import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';


import SplashContainer from './splash';


import RecsContainer from './recs/recs_container';
import ProfileEditContainer from './profile/profile_edit_container';
import ProfileFormContainer from './profile/profile_form/profile_form_container';
import ProfileContainer from './profile/profile_container';
import MatchesContainer from './matches/matches_container';

const App = () => (
    <div>
        
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/recs" component={RecsContainer} />
            <Route exact path="/profile/create" component={ProfileFormContainer} />
            <Route exact path='/profile' component={ProfileContainer} />
            <Redirect to="/recs" />
        </Switch>
    </div>
);

export default App;