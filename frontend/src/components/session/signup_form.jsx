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
        this.demoLogin = this.demoLogin.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }
        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup({
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }).then(this.props.history.push('/profile/create'))
    }
    
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }
    
    demoLogin(e) {
      e.preventDefault();
      console.log('demo-login-clicked');
    }
    
    render() {
        return (
            <div className="login-form-container">
                <button onClick={this.demoLogin}>Demo Login</button>
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        {this.renderErrors()}
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);