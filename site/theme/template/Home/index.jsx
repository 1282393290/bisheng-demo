import React from 'react';
import { Link } from 'bisheng/router';

function Home() {
	console.log('home');
	
	return <div>
		<h1>Sog Component</h1>
		<h2>企业级产品设计体系，创造高效愉悦的工作体验</h2>
		<button><Link to="/components/">开始使用</Link></button>
	</div>
}

export default Home;