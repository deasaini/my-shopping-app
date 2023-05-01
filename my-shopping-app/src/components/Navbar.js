import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/cart_context';
import './Navbar.css';

export default function Navbar() {
	const { amount } = useGlobalContext();
	return (
		<div className="nav">
			<div className="nav-container">
				<h1>Ethnic Online</h1>

				<ul className="links">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/products">
						<li>Products</li>
					</Link>
				</ul>

				<div className="user">
					<Link to="/cart">
						<i className="fa fa-shopping-cart fa-2x cart-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								fill="currentColor"
								class="bi bi-cart"
								viewBox="0 0 16 16"
								id="IconChangeColor"
							>
								{' '}
								<path
									d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
									id="mainIconPathAttribute"
								></path>{' '}
							</svg>
						</i>{' '}
					</Link>
					<div className="nav-item">
						<div className="amount-container">
							<p className="total-amount">{amount}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
