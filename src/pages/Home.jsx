import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import lung from "../assets/lung2.png";

const Home = () => {
	return (
		<div className="w-screen min-h-screen bg-(--bg) flex flex-col justify-between">
			<Navbar active="Home" />
			<div className="py-5 px-2 flex flex-col items-center">
				<div className="max-w-200 flex flex-col gap-10">
					<div className="flex items-center gap-2">
						<div className="flex flex-col gap-2">
							<div className="w-1/2 text-5xl font-semibold text-(--accent-dark)">
								AI-Based Tuberculosis Detection
							</div>
							<div className="">
								Upload your chest X-ray and our AI will check it
								to estimate your risk of Tuberculosis.
							</div>
							<Link
								to="/detect"
								className="px-4 py-2 bg-(--accent) hover:bg-(--accent-dark) text-(--bg-light) w-fit rounded-sm transition-all ease-in shadow-md"
							>
								Try Detecting Now
							</Link>
						</div>
						<div className="w-1/2">
							<img src={lung} alt="" />
						</div>
					</div>
					<div className="flex flex-col gap-5 items-center">
						<div className="text-3xl font-semibold text-(--accent-dark)">
							Why?
						</div>
						<div className="h-50 flex gap-5 ">
							<div className="flex bg-(--bg-light) rounded-sm flex-col items-center p-2 gap-2 text-(--text) shadow-md justify-center hover:scale-105 transition-all ease-in">
								<div className="font-semibold text-(--accent-dark) text-lg">
									Fast
								</div>
								<div className="text-center">
									Get instant result with our AI Model trained
									on chest X-ray data
								</div>
							</div>
							<div className="flex bg-(--bg-light) rounded-sm flex-col items-center p-2 gap-2 text-(--text) shadow-md justify-center hover:scale-105 transition-all ease-in">
								<div className="font-semibold text-(--accent-dark) text-lg">
									Educational
								</div>
								<div className="text-center">
									Learn about Tuberculosis symptoms,
									preventions, and treatment
								</div>
							</div>
							<div className="flex bg-(--bg-light) rounded-sm flex-col items-center p-2 gap-2 text-(--text) shadow-md justify-center hover:scale-105 transition-all ease-in">
								<div className="font-semibold text-(--accent-dark) text-lg">
									Accessible
								</div>
								<div className="text-center">
									Free and easy to use designed to support
									both patients and doctors
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
