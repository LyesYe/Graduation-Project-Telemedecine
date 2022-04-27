import React from 'react';
import { useState } from 'react'
import './login.css';

const Login = () => {
	
	const [username, setName] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})

		const data = await response.json()
		console.log(response.status);

		if (response.status == 201) {
			localStorage.setItem('token', data.token)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
		
	}





	return (
		<div className="flexContainer">
			
			<div className="card">
			<div className="miniflex">
			<h4 className="logo">Logo</h4>
			<p className="signup">Dont have an account ?<span> Sign Up</span> </p>
			</div>
			
			<h1 className="loginTitle">Welcome Back</h1>
			<h5 className="loginTitle2">Login Into Your Account</h5>
			<form onSubmit={loginUser}>
			<div className="form">
			
				<input className="form"
					value={username}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="username"
				/>
				<br />
				<input className="form"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				
				</div>


				<div className="but">
				<input id="but" type="submit" value="Login" />
				</div>

			</form>

			</div>
			
			<div className="imgCard">


			</div>

		</div>
		
	);
}

export default Login;
