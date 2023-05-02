import { render, screen } from '@testing-library/react';
import App from './App';
import toast, { Toaster } from 'react-hot-toast';
import AmountButtons from './components/AmountButtons';
import data from './data';

test('N times success toast is called', () => {
	const successToast = () => toast.success('Payment successful');
	const message1 = successToast();
	const message2 = successToast();
	expect(message1).toEqual('1');
});

test('Success toast returns the number of times it is called', () => {
	const successToast = () => toast.success('Payment successful');
	const message3 = successToast();
	const message4 = successToast();
	expect(message3).toEqual('3');
});

test('Component Amount Buttons are of type button', () => {
	const AmountButtons = () => {
		render(<AmountButtons />);
		// eslint-disable-next-line testing-library/await-async-query
		const isButton = screen.findByRole('button');
		expect(isButton).toEqual('False');
	};
});

test('Different types of dresses', () => {
	const totalItems = data.length;
	expect(totalItems).toEqual(12);
});

test('Stock for a dress should be more than zero', () => {
	const firstDress = data[0];
	expect(firstDress.stock).toBeGreaterThan(0);
});
