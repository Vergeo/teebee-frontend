import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detection from "./pages/Detection";
import AboutUs from "./pages/AboutUs";
import Information from "./pages/Information";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detect" element={<Detection />} />
				<Route path="/information" element={<Information />} />
				<Route path="/about_us" element={<AboutUs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
