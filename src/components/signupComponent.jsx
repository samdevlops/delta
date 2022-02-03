import React, { Component } from 'react';

class SignUp extends Component {
    render() { 
        return (
            <div class="hero"> 
                <form action="https://formspree.io/f/moqyyrpr" method="POST">
                    <h1>Sign Up</h1>
                    <div class="form-group">
                        <input name="firstname" type="text" placeholder="First Name" autoFocus/>
                    </div>
                    <div class="form-group">
                        <input name="lastname" type="text" placeholder="Last Name"/>
                    </div>
                    <div class="form-group">
                        <input name="email" type="email" placeholder="Email Address"/>
                    </div>
                    <div class="form-group">
                        <input name="password" type="password" placeholder="Password"/>
                    </div>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignUp;