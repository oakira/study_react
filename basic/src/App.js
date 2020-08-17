import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Home } from "./Home"
import { Chapter3 } from "./Chapter3"

export class App extends React.Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<nav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/chapter3">Chapter3</Link></li>
						</ul>
					</nav>
					<div>
						<Route exact path='/' component={Home} />
						<Route path='/chapter3' component={Chapter3} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
