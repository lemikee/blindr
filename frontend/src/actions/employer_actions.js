import * as APIUtil from '../util/employers_util';

export const RECEIVED_EMPLOYER = 'RECEIVED_EMPLOYER';

const receivedEmployer = (employer) => {
  return {
    type: RECEIVED_EMPLOYER,
    employer
  }
}

export const getEmployer = (employerId) => (dispatch) => {
  return APIUtil.getEmployer(employerId).then(payload => dispatch(receivedEmployer(payload.data.profile)));
}