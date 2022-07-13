import Navbar from './Components/Navbar.js';
import Hero from './Components/Hero.js';
import Card from './Components/Card.js';
import data from './data.js';

const cardElements = data.map((item) => {
	return <Card key={item.id} {...item} />;
});

function App() {
	return (
		<div className="container">
			<Navbar />
			<Hero />
			<section className="cards-list">{cardElements}</section>
		</div>
	);
}

export default App;
