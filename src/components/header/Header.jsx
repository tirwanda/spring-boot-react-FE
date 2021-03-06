import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div>
				<header>
					<nav className="navbar navbar-expand-md navbar-dark bg-dark">
						<div className="container">
							<a href="/" className="navbar-brand">
								Employee Management
							</a>
							<a href="/add-employee" className="navbar-brand">
								Add Employee
							</a>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}
