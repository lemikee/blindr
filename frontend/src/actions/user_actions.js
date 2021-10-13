import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

const receiveUserProfile = profile => ({
  type: RECEIVE_USER_PROFILE,
  profile
});

export const updateProfile = (profile) => dispatch => (
  APIUtil.updateProfile(profile)
    .then(payload => {
      // console.log(payload);
      dispatch(receiveUserProfile(payload))})
)