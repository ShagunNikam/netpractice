import React, { Component } from "react";

import  LogoImg  from '../../assets/img/login_logo.png';

class Login extends Component {
	render() {
		return (
			<div className="login_container">
				<div className="login_logo__wrapper">
					<div className="login_logo">
						<img src={LogoImg} alt="" />
					</div>
					<div className="signup_btn__wrapper">
						<button className="btn signup__btn">SIGN UP</button>
					</div>
				</div>
				<div className="login_form__wrapper">
					<form className="form">
						<div className="group">      
							<input type="text" required />
							<span className="highlight"></span>
							<span className="bar"></span>
							<label>Email</label>
						</div>
						  
						<div className="group">      
							<input type="text" required />
							<span className="highlight"></span>
							<span className="bar"></span>
							<label>Password</label>
						</div>

						<div className="login_forget__link">
							<a href="">Forgot Your Password?</a>
						</div>

						<div className="login_btn">
							<button className="btn">Sign In</button>
						</div>
					
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
