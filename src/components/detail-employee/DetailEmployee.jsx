import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';

export default class DetailEmployee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
			employee: {},
		};
	}

	componentDidMount() {
		EmployeeService.getEmployeeById(this.state.id).then((res) => {
			this.setState({ employee: res.data });
		});
	}
	render() {
		return (
			<div style={{ marginTop: '2rem' }}>
				<div
					className="card col-md-6 offset-md-3"
					style={{ padding: '1rem' }}
				>
					<h3 className="text-center">Employee Detail</h3>
					<div className="card-body">
						<div className="row">
							<label>First Name : </label>
							<div>{this.state.employee.firstName}</div>
						</div>
						<div className="row">
							<label>Last Name : </label>
							<div>{this.state.employee.lastName}</div>
						</div>
						<div className="row">
							<label>Email : </label>
							<div>{this.state.employee.email}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
