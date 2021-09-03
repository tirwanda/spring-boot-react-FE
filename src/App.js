import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import EmployeeForm from './components/employee-form/EmployeeForm';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ListEmployee from './components/listEmployee/ListEmployee';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={ListEmployee} />
						<Route
							path="/add-employee/:id"
							component={EmployeeForm}
						/>
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
