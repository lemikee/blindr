import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';


import SplashContainer from './splash';



import ProfileEditPage from './profile/profile_edit';
// import ProfileFormContainer from './profile/profile_form/profile_form_container';
import ProfileCreatePage from './profile/profile_create_page';
import ProfileContainer from './profile/profile_container';
import MatchesContainer from './matches/matches_container';
import RecsContainer from './recs/recs_container';
import UserRecCards from './recs/user_rec_cards';

const App = () => (
    <div className="app">
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/recs" component={RecsContainer} />
            <Route exact path="/profile/create" component={ProfileCreatePage} />
            <Route exact path='/profile' component={ProfileContainer} />
            <Route exact path='/profile/edit' component={ProfileEditPage} />
            <Redirect to="/recs" />
        </Switch>
    </div>
);

export default App;