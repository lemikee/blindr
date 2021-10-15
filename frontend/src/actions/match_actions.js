import * as ApiUtil from "../util/matches_util";

export const RECEIVE_MATCH = "RECEIVE_MATCH";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";
export const REMOVE_MATCH = "REMOVE_MATCH";

const receiveMatch = match => ({
  type: RECEIVE_MATCH,
  match
})

const receiveMatches = matches => ({
  type: RECEIVE_MATCHES,
  matches
})

export const createMatch = matchData => dispatch => (
  ApiUtil.postMatch(matchData)
    .then( payload => dispatch(receiveMatch( payload.data.match )))
)

export const deleteMatch = matchData => dispatch => (
  ApiUtil.destroyMatch(matchData)
)

export const getUserMatches = userId => dispatch => (
  ApiUtil.fetchMatches(userId)
    .then( payload => dispatch(receiveMatches( payload.data.matches )))
)