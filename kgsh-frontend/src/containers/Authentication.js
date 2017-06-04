import React, { Component } from 'react';
import $ from 'jquery';

class Authentication extends Component {
    componentDidMount() {
        $('.message a').click(()=>{
            $('form').animate({height : "toggle", opacity : "toggle"}, "slow");
        });   
    }

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="register-form">
                        <input type="text" placeholder="name"/>
                        <input type="password" placeholder="password"/>
                        <input type="text" placeholder="email address"/>
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form className="login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>login</button>
                        <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default Authentication;