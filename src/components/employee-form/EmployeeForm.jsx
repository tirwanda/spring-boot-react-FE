import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';

export default class EmployeeForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id,
			firstName: '',
			lastName: '',
			email: '',
		};

		this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
		this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
		this.changeEmailHandler = this.changeEmailHandler.bind(this);
		this.saveEmployee = this.saveEmployee.bind(this);
	}

	componentDidMount() {
		if (this.state.id === '_add') {
			return;
		} else {
			EmployeeService.getEmployeeById(this.state.id).then((res) => {
				let employee = res.data;
				this.setState({
					firstName: employee.firstName,
					lastName: employee.lastName,
					email: employee.email,
				});
			});
		}
	}

	changeFirstNameHandler(event) {
		this.setState({ firstName: event.target.value });
	}

	changeLastNameHandler(event) {
		this.setState({ lastName: event.target.value });
	}

	changeEmailHandler(event) {
		this.setState({ email: event.target.value });
	}

	saveEmployee(e) {
		e.preventDefault();
		let employees = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
		};

		if (this.state.id === '_add') {
			EmployeeService.createEmployee(employees).then((res) => {
				this.props.history.push('/');
			});
		} else {
			EmployeeService.updateEmployee(employees, this.state.id).then(
				(res) => this.props.history.push('/')
			);
		}
	}

	cancel() {
		this.props.history.push('/');
	}

	getTitle() {
		if (this.state.id === '_add') {
			return <h3 className="text-center">Add Employee</h3>;
		} else {
			return <h3 className="text-center">Update Employee</h3>;
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="card col-md-6 offset-md-3">
						{this.getTitle()}
						<div className="card-body">
							<form>
								<div className="form-group">
									<label htmlFor="firstName">
										First Name:{' '}
									</label>
									<input
										type="text"
										placeholder="First Name"
										name="firstName"
										className="form-control"
										value={this.state.firstName}
										onChange={this.changeFirstNameHandler}
									/>

									<label htmlFor="lastName">
										Last Name:{' '}
									</label>
									<input
										type="text"
										placeholder="Last Name"
										name="lastName"
										className="form-control"
										value={this.state.lastName}
										onChange={this.changeLastNameHandler}
									/>

									<label htmlFor="email">Email: </label>
									<input
										type="text"
										placeholder="Email"
										name="email"
										className="form-control"
										value={this.state.email}
										onChange={this.changeEmailHandler}
									/>
								</div>

								<div
									className="btn-action"
									style={{ marginTop: '10px' }}
								>
									<button
										className="btn btn-success"
										onClick={this.saveEmployee}
									>
										Save
									</button>
									<button
										className="btn btn-danger"
										onClick={this.cancel.bind(this)}
										style={{ marginLeft: '10px' }}
									>
										Cancel
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
