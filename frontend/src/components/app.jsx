import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Footer from './footer/footer';


import SplashContainer from './splash';



import ProfileEditPage from './profile/profile_edit';
// import ProfileFormContainer from './profile/profile_form/profile_form_container';
import ProfileCreatePage from './profile/profile_create_page';
import ProfileContainer from './profile/profile_container';
import PostingCreatePage from './postings/posting_create_page';
import MatchesContainer from './matches/matches_container';
import RecsContainer from './recs/recs_container';
import UserRecCards from './recs/rec_cards';
import About from './about/about';

const App = () => (
    <div className="app">
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/about" component={About} />
            <Route exact path="/recs" component={RecsContainer} />
            <Route exact path="/posting/create" component={PostingCreatePage} />
            <Route exact path="/profile/create" component={ProfileCreatePage} />
            <Route exact path='/profile' component={ProfileContainer} />
            <Route exact path='/profile/edit' component={ProfileEditPage} />
            <Redirect to="/recs" />
        </Switch>
    <Footer />
    </div>
);

export default App;