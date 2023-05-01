import { Link } from 'react-router-dom';
import './Home.css';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
	return (
		<div className="info">
			<div className="content">
				<div className="head">
					<h1>Ready for new stuff</h1>
					<p>Buy ethnic clothes from different cultures</p>

					<Link to="/products">
						<Stack spacing={2} direction="row">
							<Button variant="text">Get Started</Button>
						</Stack>
					</Link>
				</div>
			</div>
			<div className="pic"></div>
		</div>
	);
}
