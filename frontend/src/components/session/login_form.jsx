import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.currentUser === true) {
    //         this.props.history.push('/profile');
    //     }
    //     this.setState({ errors: nextProps.errors });
    // }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login({ 
            email: this.state.email, 
            password: this.state.password 
        });
    }

    renderErrors() {
        if (!Object.keys(this.props.errors).length){
            
            return null;
        } 
        return (
            <ul className='modal-errors'>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }
    


    render() {
        return (
            <div>
            <div className='modal-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='modal-title login-title'>{this.props.formType}</div>
                    <div>
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className='modal-input'
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className='modal-input input-btm'
                        />
                        <br />
                        <button className='modal-input submit login-btn'>Login</button>
                    </div>
                </form>
            </div>
           
            {this.renderErrors()}
            
            </div>
        );
    }
}

export default withRouter(LoginForm);