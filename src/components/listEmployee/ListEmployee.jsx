import React, { Component } from 'react';

export default class ListEmployee extends Component {
	constructor(props) {
		super(props);

		this.state = {
			employees: [],
		};
	}
	render() {
		return (
			<div>
				<h2 className="text-center">Employee List</h2>
				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email Address</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{this.state.employees.map((employee) => (
								<tr key={employee.id}>
									<td>{employee.firstName}</td>
									<td>{employee.lastName}</td>
									<td>{employee.emailAddress}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
