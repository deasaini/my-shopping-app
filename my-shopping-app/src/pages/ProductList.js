import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import AddToCart from '../components/AddToCart';
import '../App.css';

const ProductList = () => {
	const { products } = useProductsContext();
	return (
		<>
			<div className="card-center">
				{products.map((product) => {
					const { id, image, name, price } = product;
					return (
						<article key={id} className="card">
							<div className="img-container">
								<img src={image} alt={name} />
							</div>
							<div className="card-footer">
								<div className="product">
									<h4>{name}</h4>
									<h4 className="price">${price}</h4>
								</div>

								<AddToCart product={product} />
								<Link
									to={`/products/${id}`}
									className="add-cart"
									style={{
										color: '#17252A',
										background: '#fff',
										border: '2px solid #17252A'
									}}
								>
									View
								</Link>
							</div>
						</article>
					);
				})}
			</div>
		</>
	);
};
export default ProductList;
