import { Routes, Route } from "react-router-dom"
import { Header } from "./components/header/header";
import { Config } from "./components/config/config";
import { ElevatorControls } from "./components/elevator-controls/elevator-controls";
import { ElevatorStatuses } from "./components/elevator-statuses/elevator-statuses";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/config" element={<Config />}></Route>
				<Route path="/controls" element={<ElevatorControls />}></Route>
				<Route path="/statuses" element={<ElevatorStatuses />}></Route>
			</Routes>
		</div>
	);
}

export default App;
