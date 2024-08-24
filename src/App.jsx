/** @format */

import "./App.css";

import Modal from "./Modal/Modal";
import Preloader from "./Preloader /Preloader";

function App() {
	return (
		<>
			<Preloader />
			<div className="app-container">
				<div className="blur-background"></div>
				<div className="content">
					<div>
						<Modal />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
