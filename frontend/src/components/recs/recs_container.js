import { connect } from "react-redux";
import Recs from "./recs";
import { createMatch, deleteMatch } from "../../actions/match_actions"

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createMatch: matchData => dispatch(createMatch(matchData)),
  deleteMatch: matchData => dispatch(deleteMatch(matchData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Recs);
