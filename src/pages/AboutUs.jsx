import Navbar from "./components/Navbar";
import prisky from "../assets/prisky.jpg";
import Footer from "./components/Footer";

const AboutUs = () => {
	

	return (
		<div className="w-screen min-h-screen bg-(--bg) flex flex-col justify-between">
			<Navbar active="About Us" />
			<div className="py-5 px-2 flex flex-col items-center">
				<div className="max-w-200 flex flex-col gap-10 w-full">
					<div className="text-5xl text-(--accent-dark) font-semibold text-center">
						About Us
					</div>

					<div className="bg-(--bg-light) w-full p-5 gap-5 rounded-md shadow-md flex">
						<img
							src={prisky}
							alt=""
							className="h-50 w-50 rounded-full"
						/>
						<div className="flex flex-col flex-1 justify-between">
							<div className="text-2xl font-bold">
								Prisky Jofan Simbar
							</div>
							<div className="text-sm">
								Saya ganteng banget, saya punya banyak aura.
							</div>
							<div>Linked In</div>
						</div>
					</div>
					<div className="bg-(--bg-light) w-full p-5 gap-5 rounded-md shadow-md flex">
						<div className="flex flex-col flex-1 justify-between">
							<div className="text-2xl font-bold text-right">
								Prisky Jofan Simbar
							</div>
							<div className="text-sm text-right">
								Saya ganteng banget, saya punya banyak aura.
							</div>
							<div className="text-right">Linked In</div>
						</div>
						<img
							src={prisky}
							alt=""
							className="h-50 w-50 rounded-full"
						/>
					</div>
					<div className="bg-(--bg-light) w-full p-5 gap-5 rounded-md shadow-md flex">
						<img
							src={prisky}
							alt=""
							className="h-50 w-50 rounded-full"
						/>
						<div className="flex flex-col flex-1 justify-between">
							<div className="text-2xl font-bold">
								Prisky Jofan Simbar
							</div>
							<div className="text-sm">
								Saya ganteng banget, saya punya banyak aura.
							</div>
							<div>Linked In</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AboutUs;
