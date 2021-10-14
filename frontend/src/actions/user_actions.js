import * as APIUtil from '../util/users_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';

const receiveUserProfile = profile => ({
  type: RECEIVE_USER_PROFILE,
  profile
});

const receiveErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
})

export const updateProfile = (userId, profileData) => dispatch => (
  APIUtil.patchProfile(userId, profileData)
    .then( payload => dispatch(receiveUserProfile( payload.data.profile )))
    .catch( error => dispatch(receiveErrors(error.response.data)))
)

export const getProfile = (userId, userEmail) => dispatch => (
  APIUtil.showProfile(userId, userEmail)
    .then( payload => dispatch(receiveUserProfile( payload.data.profile)))
)