import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/CartItems';
import Homepage from './pages/Home';
import Productlist from './pages/ProductList';
import ProductDetails from './pages/SingleProduct';

export default function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route exact path="/cart" element={<Cart />} />
					<Route exact path="/products" element={<Productlist />} />
					<Route exact path="/products/:id" element={<ProductDetails />} />
				</Routes>
			</Router>
		</div>
	);
}
