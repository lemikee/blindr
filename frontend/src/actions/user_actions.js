import * as UserApiUtil from '../util/users_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

const receiveUserProfile = profile => ({
  type: RECEIVE_USER_PROFILE,
  profile
});

export const updateProfile = (profileData) => dispatch => (
  UserApiUtil.patchProfile(profileData)
    // .then(payload => dispatch(receiveUserProfile(payload)))
)