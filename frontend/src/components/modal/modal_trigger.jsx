import React from 'react';
import { Redirect } from 'react-router-dom';

class ModalTrigger extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.openModal('login');
    }

    render(){
        return (
            <div>
                <Redirect to='/'/>
            </div>
        );
    }
}

export default ModalTrigger;