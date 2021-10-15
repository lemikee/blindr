import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.clearedErrors = false;
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.signedIn === true) {
    //         this.props.history.push('/login');
    //     }
    //     this.setState({ errors: nextProps.errors })
    // }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup({
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        }, this.props.history)
    }

    handleDemo() {
        this.props.loginDemo().then(() => this.props.history.push('/profile'))
    }
    
    renderErrors() {
        if (!Object.keys(this.props.errors).length) {
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
                <div className='modal-title'>{this.props.formType}</div>
                <form onSubmit={this.handleSubmit}>
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
                            className='modal-input'
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                            className='modal-input'
                        />
                        <br />
                        <button type='submit' className='modal-input submit'>Sign Up</button>
                        <br/>
                        <button type='button' className='demo-btn' onClick={this.handleDemo}>Demo Login</button>
                    </div>
                </form>
            </div>
            {this.renderErrors()}
            </div>
        );
    }
}

export default withRouter(SignupForm);