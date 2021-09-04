import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';
import './listEmployee.scss';

export default class ListEmployee extends Component {
	constructor(props) {
		super(props);

		this.state = {
			employees: [],
		};

		this.addEmployee = this.addEmployee.bind(this);
		this.updateEmployee = this.updateEmployee.bind(this);
		this.deleteEmployee = this.deleteEmployee.bind(this);
	}

	componentDidMount() {
		EmployeeService.getEmployee().then((res) => {
			this.setState({ employees: res.data });
		});
	}

	addEmployee() {
		this.props.history.push('/add-employee/_add');
	}

	updateEmployee(id) {
		this.props.history.push(`/add-employee/${id}`);
	}

	deleteEmployee(id) {
		EmployeeService.deleteEmployee(id).then((res) => {
			this.setState({
				employees: this.state.employees.filter(
					(employee) => employee.id !== id
				),
			});
		});
	}

	detailEmployee(id) {
		this.props.history.push(`/employee/${id}`);
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
										<div className="btn-action">
											<button
												onClick={() =>
													this.updateEmployee(
														employee.id
													)
												}
												className="btn btn-info"
											>
												Update
											</button>
											<button
												onClick={() =>
													this.deleteEmployee(
														employee.id
													)
												}
												className="btn btn-danger"
											>
												Delete
											</button>

											<button
												onClick={() =>
													this.detailEmployee(
														employee.id
													)
												}
												className="btn btn-success"
											>
												Detail
											</button>
										</div>
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
