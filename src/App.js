import './App.css';
import { Person } from './components/Person';

function App() {
	return (
		<div className="App">
		<Person
			name="Hyper"
			email="hyper@max.com"
			age={22}
			isMarried={true}
			friends={["GGanon", "Glimpse", "Cheedo", "Ely", "TopKid", "NightSky"]}
		/>
		</div>
	);
}

export default App;
