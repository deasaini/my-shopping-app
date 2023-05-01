import React from 'react';
import App from './App';
import { CartProvider } from './context/cart_context';
import { ProductsProvider } from './context/products_context';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<CartProvider>
		<ProductsProvider>
			<App />
		</ProductsProvider>
	</CartProvider>
);
