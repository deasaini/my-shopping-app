import React from 'react';
import { useGlobalContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';
import './Cart.css';

const CartItem = React.memo(function CartItem({
	id,
	name,
	image,
	price,
	amount
}) {
	const { remove, decrease, increase } = useGlobalContext();

	return (
		<div className="cart">
			<div className="title">
				<img src={image} alt={name} />
				<div>
					<h3 className="name">{name}</h3>
					<h3 className="price-small">${price}</h3>
				</div>
			</div>

			<AmountButtons
				amount={amount}
				inc={() => increase(id)}
				dec={() => decrease(id)}
			/>
			<h3 className="subtotal">${price * amount}</h3>
			<button type="button" className="remove-btn" onClick={() => remove(id)}>
				<i className="fa fa-trash">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						fill="currentColor"
						class="bi bi-trash"
						viewBox="0 0 17 17"
					>
						{' '}
						<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{' '}
						<path
							fill-rule="evenodd"
							d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
						/>{' '}
					</svg>
				</i>
			</button>
		</div>
	);
});
export default CartItem;
