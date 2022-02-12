import React, { Component } from 'react';

class LoginForm extends Component {
    render() { 
        return (
            <div class="container"> 
                <form action="https://formspree.io/f/moqyyrpr" method="POST">
                    <h1>Login</h1>
                    <div class="form-group">
                        <input name="email" type="email" placeholder="Email Address" autoFocus/>
                    </div>
                    <div class="form-group">
                        <input name="password" type="password" placeholder="Password"/>
                    </div>
                    <div>
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;