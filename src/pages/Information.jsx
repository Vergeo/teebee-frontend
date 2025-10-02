import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import coughing1 from "../assets/coughing1.jpg";
import coughing2 from "../assets/coughing2.jpg";
import vaccine from "../assets/vaccine.png";

const Information = () => {
	return (
		<div className="w-screen min-h-screen bg-(--bg) flex flex-col justify-between">
			<Navbar active="Information" />
			<div className="py-5 px-2 flex flex-col items-center">
				<div className="max-w-200 flex flex-col gap-10">
					<div className="text-5xl text-(--accent-dark) font-semibold text-center">
						About Tuberculosis
					</div>

					<div className="flex gap-2 bg-(--bg-light) p-5 rounded-md shadow-md items-center">
						<div>
							<div className="text-3xl font-semibold text-(--accent-dark) mb-3">
								Tuberculosis
							</div>
							<div>
								Tuberculosis (TB) is an infectious disease
								caused by the bacterium Mycobacterium
								tuberculosis. It most often affects the lungs
								(pulmonary TB), but it can also affect other
								parts of the body such as the kidneys, spine, or
								brain (extrapulmonary TB). TB spreads through
								the air when a person with active pulmonary TB
								coughs, sneezes, or speaks, releasing bacteria
								into the air.
							</div>
						</div>
					</div>

					<div className="flex gap-2 bg-(--bg-light) p-5 rounded-md shadow-md items-center">
						<div className="flex flex-col">
							<div className="text-3xl font-semibold text-(--accent-dark) mb-3">
								Symptoms
							</div>
							<ul className="list-disc ml-4">
								<li>
									Persistent cough (lasting more than 3 weeks)
								</li>
								<li>
									Coughing up blood or sputum (phlegm from
									deep inside the lungs)
								</li>
								<li>
									Chest pain or pain when breathing/coughing
								</li>
								<li>Unintentional weight loss</li>
								<li>Fever and chills</li>
								<li>Night sweats</li>
								<li>Fatigue and weakness</li>
								<li>Loss of appetite</li>
							</ul>
						</div>
					</div>

					<div className="flex gap-2 bg-(--bg-light) p-5 rounded-md shadow-md items-center">
						<div>
							<div className="text-3xl font-semibold text-(--accent-dark) mb-3">
								Prevention
							</div>
							<div>
								<ol className="list-decimal ml-4">
									<li>Vaccination (BCG Vaccine)</li>
									<ul className="list-disc ml-4">
										<li>
											Protects children against severe
											forms of TB (like TB meningitis),
											though less effective for adults in
											preventing pulmonary TB.
										</li>
									</ul>
									<li>Early Detection and Treatment</li>
									<ul className="list-disc ml-4">
										<li>
											Screening and prompt treatment of
											active TB cases reduce spread.
										</li>
									</ul>
									<li>Infection Control Measures</li>
									<ul className="list-disc ml-4">
										<li>
											Good ventilation (TB bacteria spread
											easily in closed, crowded spaces).
										</li>
										<li>
											Wearing masks in high-risk settings.
										</li>
										<li>
											Covering mouth/nose when coughing or
											sneezing.
										</li>
									</ul>
									<li>
										Preventing Latent TB from Becoming
										Active
									</li>
									<ul className="list-disc ml-4">
										<li>
											People with latent TB, especially
											those with weakened immune systems
											(e.g., HIV patients), may take
											preventive antibiotics.
										</li>
									</ul>
									<li>Strengthening the Immune System</li>
									<ul className="list-disc ml-4">
										<li>
											Proper nutrition, regular health
											check-ups, and managing conditions
											like diabetes or HIV can lower the
											risk of TB.
										</li>
									</ul>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Information;
