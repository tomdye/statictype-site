import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './Home.m.css';

const factory = create();

export const Home = factory(function Home() {
	return (
		<div classes={css.root}>
			<head>
				<title>Static Type</title>
			</head>
			<h1>Hello, Static Type World</h1>
		</div>
	);
});

export default Home;
