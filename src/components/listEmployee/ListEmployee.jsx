import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';

export default class ListEmployee extends Component {
	constructor(props) {
		super(props);

		this.state = {
			employees: [],
		};

		this.addEmployee = this.addEmployee.bind(this);
		this.updateEmployee = this.updateEmployee.bind(this);
	}

	componentDidMount() {
		EmployeeService.getEmployee().then((res) => {
			this.setState({ employees: res.data });
		});
	}

	addEmployee() {
		this.props.history.push('/add-employee');
	}

	updateEmployee(id) {
		this.props.history.push(`/update-employee/${id}`);
	}

	render() {
		return (
			<div>
				<h2 className="text-center">Employee List</h2>
				<div className="row-btn">
					<button
						className="btn btn-primary"
						onClick={this.addEmployee}
					>
						Add Employee
					</button>
				</div>
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
									<td>{employee.email}</td>
									<td>
										<button
											onClick={() =>
												this.updateEmployee(employee.id)
											}
											className="btn btn-info"
										>
											Update
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
