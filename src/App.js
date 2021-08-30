import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import EmployeeForm from './components/employee-form/EmployeeForm';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ListEmployee from './components/listEmployee/ListEmployee';
import UpdateEmployee from './components/update-employee/UpdateEmployee';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={ListEmployee} />
						<Route path="/add-employee" component={EmployeeForm} />
						<Route
							path="/update-employee/:id"
							component={UpdateEmployee}
						/>
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
