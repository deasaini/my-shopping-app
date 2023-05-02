import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useGlobalContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import '../App.css';
import toast, { Toaster } from 'react-hot-toast';
const successToast = () => toast.success('Payment successful!');

const CartItems = () => {
	const { cart, clear, total } = useGlobalContext();
	if (cart.length < 1) {
		return (
			<div className="page-100">
				<div className="empty" style={{ textAlign: 'center' }}>
					<h2
						style={{
							marginBottom: '1rem',
							marginTop: '1.5rem'
						}}
					>
						Your cart is empty.
					</h2>
					<div className="shop-now" style={{ position: 'relative' }}>
						<Link to="/products" className="link-btn">
							<Stack spacing={2} direction="row">
								<Button
									onClick={clear}
									variant="Shop Now"
									style={{
										padding: '10px',
										color: '#fff',
										backgroundColor: '#f67b50',
										borderRadius: '10px',
										position: 'absolute',
										marginLeft: '40px',
										justifycontent: 'center'
									}}
								>
									Shop Now
								</Button>
							</Stack>
						</Link>
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
			<h1 style={{ textAlign: 'center', paddingTop: '0.5rem' }}>Cart</h1>

			<div className="section section-center">
				{cart.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
				<hr />
				<div className="link-container">
					<Link to="/products" className="link-btn">
						<Stack spacing={2} direction="row">
							<Button variant="continue shopping">Continue shopping</Button>
						</Stack>
					</Link>
					<Stack spacing={2} className="link-btn" direction="row">
						<Button onClick={clear} variant="clear Cart">
							Clear Cart
						</Button>
					</Stack>
				</div>
				<div className="cart-total-checkout">
					<article>
						<h3>
							Order Total : <span>${total}</span>
						</h3>
					</article>
					<div className="pay-now">
						<Stack spacing={2} direction="row">
							<Button variant="pay-now" onClick={successToast}>
								Pay Now
							</Button>
							<Toaster />
						</Stack>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItems;
