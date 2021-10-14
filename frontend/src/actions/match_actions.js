import * as ApiUtil from "../util/matches_util";

export const RECEIVE_MATCH = "RECEIVE_MATCH";
export const REMOVE_MATCH = "REMOVE_MATCH";


export const createMatch = matchData => dispatch => (
  ApiUtil.postMatch(matchData)
    // .then( payload => dispatch(receiveJob( payload.data.match )))
)

export const deleteMatch = matchData => dispatch => (
  ApiUtil.destroyMatch(matchData)
)