import React from 'react';
import PostingForm from './posting_form/posting_form';

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
            <PostingForm history={this.props.history}/>
          </div >
          <br />
        </div>
        
      </div>
    );
  }
}
 
export default PostingCreatePage;