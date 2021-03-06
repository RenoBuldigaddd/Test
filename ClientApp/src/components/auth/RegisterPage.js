import React, { Component } from 'react';
import classnames from "classnames";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {registerUser} from './reducer';
import EclipseWidget from '../loader';

const propTypes = {
    register: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

class RegisterPage extends Component {
    state = { 
        email: '',
        password: '',
        passwordConfirm: '',
        loading: this.props.loading,
        errors: {
            //email: 'Invalid'
        }
     }

     UNSAFE_componentWillReceiveProps = (nextProps) => {
        console.log('Change props ');
        this.setState({
            loading: nextProps.loading,
            errors: nextProps.errors
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('--register submit--');
        const {email, password, passwordConfirm} = this.state;
        this.props.register({
            email: email, 
            password: password, 
            passwordConfirm: passwordConfirm}
        );
    }

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({
                [name]: value,
                errors
            });
        } else {
            this.setState({ [name]: value });
        }
    };

    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };

    render() { 
        console.log('----This props REGISTER PAGE-----', this.props);
        console.log('----This state REGISTER PAGE-----', this.state);
        const {email, loading, password, passwordConfirm, errors} = this.state;
        return ( 
            <>
                <h2>Реєстрація</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            className={classnames('form-control', { 'is-invalid': !!errors.email })}
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange} />
                        {!!errors.email &&
                            <div className="help-block">{errors.email}</div>
                        }
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            className={classnames('form-control', { 'is-invalid': !!errors.password })}
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange} />
                        {!!errors.password &&
                            <div className="help-block">{errors.password}</div>
                        }
                    </div>

                    <div className="form-group">
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input type="password"
                            className={classnames('form-control', { 'is-invalid': !!errors.passwordConfirm })}
                            id="passwordConfirm"
                            name="passwordConfirm"
                            value={passwordConfirm}
                            onChange={this.handleChange} />
                        {!!errors.passwordConfirm &&
                            <div className="help-block">{errors.passwordConfirm}</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Sign Up</button>

                    </div>
                </form>

                {loading && <EclipseWidget/>}
            </>
         );
    }
}

const mapState = (state) => {
    return {
        loading: state.register.loading,
        errors: state.register.errors,
    }
}

RegisterPage.propTypes = propTypes;
 
export default connect(mapState, {register: registerUser})(RegisterPage);