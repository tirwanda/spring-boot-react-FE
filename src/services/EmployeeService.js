import axios from 'axios';

const EMPLOYE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {
	getEmployee() {
		return axios.get(EMPLOYE_API_BASE_URL);
	}
}

export default new EmployeeService();
