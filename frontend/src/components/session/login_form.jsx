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
        this.handleDemo = this.handleDemo.bind(this);
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
        }).then(() => this.props.history.push('/profile'));
    }

    handleDemo() {
        this.props.loginDemo().then(() => this.props.history.push('/profile'))
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
            {this.renderErrors()}
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
                            className='modal-input input-btm'
                        />
                        <br />
                        <button type='submit' className='modal-input submit'>Login</button>
                        <button type='button' className='demo-btn' onClick={this.handleDemo}>Demo Login</button>
                    </div>
                </form>
            </div>



            </div>
        );
    }
}

export default withRouter(LoginForm);