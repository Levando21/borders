/** @format */

import "./App.css";

import Modal from "./Modal/Modal";

function App() {
	return (
		<div className="app-container">
			<div className="blur-background"></div>
			<div className="content">
				<div>
					<Modal />
				</div>
			</div>
		</div>
	);
}

export default App;
