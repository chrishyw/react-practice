import React from "react";

const Form = (props) => {
	return(
		<form id="loginForm">
		  <div className="form-group">
		    <label htmlFor="exampleInputEmail1">Email address</label>
		    <input onChange={(e)=>props.handleChange(e, e.target.value)} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
		    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
		  </div>
		  <div className="form-group">
		    <label htmlFor="exampleInsputPassword1">Password</label>
		    <input onChange={e=>props.handleChange(e, e.target.value)} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
		  </div>
		  <div className="form-group form-check">
		    <input onChange={(e)=>props.handleCheckBox(e, "props from checkbox")} type="checkbox" className="form-check-input" id="exampleCheck1" />
		    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
		  </div>
		  <button id="loginBtn" type="submit" className="btn btn-primary" onClick={props.formSubmit}>Login</button>
			<button className="btn btn-success" onClick={props.signupBtn}>Sign Up</button>
		</form>
	);
}

export default Form;