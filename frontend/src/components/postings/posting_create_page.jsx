import React from 'react';
import PostingFormContainer from './posting_form/posting_form_container';

class PostingCreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="profile-create-page" >
        <div className="profile-container" style={{marginLeft: '0px'}}>
          <div className='profile-info-container' style={
            { 
              backgroundColor: 'rgb(237, 237, 237, 0.98)',
            }}>
            <PostingFormContainer history={this.props.history}/>
          </div >
          <br />
        </div>
        
      </div>
    );
  }
}
 
export default PostingCreatePage;