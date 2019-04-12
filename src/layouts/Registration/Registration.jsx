import React, { Component } from "react";

import  LogoImg  from '../../assets/img/login_logo.png';

class Registration extends Component {
	render() {
		return (
			<div className="register_container">
				<div className="register_logo__wrapper">
					<div className="register_logo">
						<img src={LogoImg} alt="register_logo" />
					</div>
				</div>
				<div className="register_mainform__wrapper">
					<div className="register_practice_wrapper">
						<p className="form_title">Register Practice</p>
						<form className="register_form">
							<div className="form__row register_form_wrap">
								<div className="inline_form">
									<div className="group">      
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>Practice Name</label>
									</div>
								</div>
								<div className="inline_form">
									<div className="group">      
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>Practice No</label>
									</div>
								</div>
								<div className="inline_form">
									<select className="custom_select group">
										<option>Choose something...</option>
										<option>Practice Type</option>
										<option>Practice Type</option>
									</select>
								</div>
							</div>
						</form>
					</div>

					<div className="register_practice_wrapper">
						<p className="form_title">Provider Details</p>
						<form className="register_form">
							<div className="form__row register_form_wrap">
								<div className="inline_form">
									<select className="custom_select group">
							        	<option>Title</option>
							        	<option>Title 1</option>
							        	<option>Title 2</option>
							        </select>
								</div>
								<div className="inline_form">
									<div className="group">      
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>Initial</label>
									</div>
								</div>
								<div className="inline_form">
									<div className="group">
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>First Name</label>
									</div>
								</div>
								<div className="inline_form">
									<div className="group">
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>Last Name</label>
									</div>
								</div>
								<div className="inline_form">
									<div className="group">
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>Practice No</label>
									</div>
								</div>
								<div className="inline_form">
									<div className="group">
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>HPC No</label>
									</div>
								</div>
								<div className="inline_form">
									<div className="group">
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>Email Address</label>
									</div>
								</div>
								<div className="inline_form">
									<div className="group">
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>Confirm Email</label>
									</div>
								</div>
								<div className="inline_form">
									<div className="group">
										<input type="text" required />
										<span className="highlight"></span>
										<span className="bar"></span>
										<label>Tel No</label>
									</div>
								</div>
							</div>
							<div className="submitform__wrapper">
								<div className="checkbox checkbox-inline">
									<input id="checkbox" type="checkbox" />
									<label htmlFor="checkbox">I Accept NetPractice terms and conditions</label>
								</div>
								<div className="save_btn__wrapper">
									<button className="btn save_btn">Save</button>
									<button className="btn cancel_btn">Cancel</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Registration;
