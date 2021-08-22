import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
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
						<Route path="/" component={ListEmployee} />
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
