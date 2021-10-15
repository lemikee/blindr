import { connect } from "react-redux";
import Recs from "./recs";
import { fetchRecommendations } from "../../actions/user_actions";
import { createMatch, deleteMatch } from "../../actions/match_actions"

const mapStateToProps = state => ({
  currentUser: state.session.user,
  jobs: state.entities.jobs
});

const mapDispatchToProps = dispatch => ({
  createMatch: matchData => dispatch(createMatch(matchData)),
  deleteMatch: matchData => dispatch(deleteMatch(matchData)),
  fetchRecommendations: userId => dispatch(fetchRecommendations(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recs);
