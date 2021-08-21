import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ListEmployee from './components/listEmployee/ListEmployee';

function App() {
	return (
		<div>
			<Header />
			<div className="container">
				<ListEmployee />
			</div>
			<Footer />
		</div>
	);
}

export default App;
