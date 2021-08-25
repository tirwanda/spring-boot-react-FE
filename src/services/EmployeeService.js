import axios from 'axios';

const EMPLOYE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {
	getEmployee() {
		return axios.get(EMPLOYE_API_BASE_URL);
	}

	createEmployee(employee) {
		return axios.post(EMPLOYE_API_BASE_URL, employee);
	}
}

export default new EmployeeService();
