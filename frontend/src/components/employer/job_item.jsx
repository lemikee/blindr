import React from 'react';

class JobItem extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='job-item'>
                <div className='interior'>
                    <div className='job-item-title'>{this.props.job.title}</div>
                    <div className='job-item-desc'>{this.props.job.description}</div>
                </div>
                <div>{this.props.job.skills}</div>
                <div>{this.props.job.minComp} - {this.props.job.maxComp}</div>
            </div>
        );
    }
}

export default JobItem;