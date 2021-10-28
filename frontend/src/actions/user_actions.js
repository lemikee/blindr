import * as APIUtil from '../util/users_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';

const receiveUserProfile = profile => ({
  type: RECEIVE_USER_PROFILE,
  profile
});

const receiveErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
})

const receiveJobs = jobs => ({
  type: RECEIVE_JOBS,
  jobs
})

export const updateProfile = (userId, profileData, history) => dispatch => (
  APIUtil.patchProfile(userId, profileData)
    .then( payload => {
      dispatch(receiveUserProfile( payload.data.profile ))
    })
    .then( () => history.push('/profile'))
    .catch( error => {
      dispatch(receiveErrors(error.response.data))
    })
)

export const getProfile = (userId) => dispatch => (
  APIUtil.showProfile(userId)
    .then( payload => dispatch(receiveUserProfile( payload.data.profile )))
)

export const fetchRecommendations = (userId) => dispatch => (
  APIUtil.getCards(userId)
    .then( payload => dispatch(receiveJobs(payload.data.jobs)))
)