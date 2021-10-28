import React from 'react';
import { GoAlert } from 'react-icons/go';

const ProfileError = (props) => {
  return (
    <div className={props.nonBasic ? 'profile-error non-basic' : 'profile-error'}>
      <GoAlert className='profile-error-icon'/>
      <div className='profile-error-message'>{props.message}</div>
    </div>
  );
}

export default ProfileError;