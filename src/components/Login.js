import React, { Component } from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    state = {
        username:null,
        password:null,
		users:{username:"",password:""}
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
	handleSubmit=(e)=>{
		e.preventDefault();
		const userData={
			username:this.state.username,
			password:this.state.password
		}
		this.setState({
			users:userData
			
		})
	}
    
    render() {
        return (
            <div>
            <div className="custombackground">
                <div className="row mx-0">
                  
                  
                    <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                                            <div className="cardParent">
                    <div class="card customcard">
                    <div class="card-body p-3">
                    <h5 class="card-title text-center pb-3">Login</h5>
                    <div className=""></div>
                    <div className="row mx-0 py-4">
                        <div className="col-2 custom_col">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="col-10">
                    <input type="text" name="username" required onChange={this.handleChange} className="cardInput" placeholder="Username"/>
				
					<p>{this.state.errormsg}</p>
					
                    </div>
                    </div>
                    <div className="row mx-0">
                    <div className="col-2 custom_col">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <div className="col-10">
                    <input type="password" className="cardInput" required name="password" onChange={this.handleChange} placeholder="Password"/>
					<p>{this.state.errormsgpass}</p>
                    </div>
                    </div>
                    <div className="row mx-0 pt-4 pb-2">
                    <div className="mx-auto">
                    <button type="submit"  value="submit" className="btn btn-primary mx-auto">Submit</button>
                    </div>
                    </div>
                    <div className="row mx-0">
                    <a className="mx-auto decoration" href="#"><p>Forgot Password</p></a>
                    </div>
                    </div>
                    </div> 
                    </div>
                    </form>

                    </div>

                    <div className="col-md-6">
					
							<div className="text-center mt-5">
							<h1>Form Values</h1>
							<p>{this.state.users.username}</p>
							<p>{this.state.users.password}</p>
							</div>
							
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
