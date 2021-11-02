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
                <div className='job-item-skills'>{this.props.job.skills.map((skill, i) => {
                    return (<div key={i} className='job-item-skill'>
                                {skill}
                            </div>);
                })}</div>
                <div className='job-item-comp'><div>${this.props.job.minComp}</div> ~ <div>${this.props.job.maxComp}</div></div>
            </div>
        );
    }
}

export default JobItem;