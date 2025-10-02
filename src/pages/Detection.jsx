import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Detection = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [status, setStatus] = useState("first");
	const [result, setResult] = useState("");
	const [confidence, setConfidence] = useState(0);

	const toBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (err) => reject(err);
		});

	const handleDetection = async () => {
		const base64Image = await toBase64(selectedImage);

		const payload = {
			data: [base64Image],
		};

		try {
			setStatus("loading");
			const response = await axios.post(
				"https://deelight-del-tuberculosis-classification.hf.space/api/predict/",
				payload
			);

			const label = response.data.data[0].confidences[0].label;
			const conf = response.data.data[0].confidences[0].confidence;
			// console.log((conf * 100).toFixed(2) + "%");
			setResult(response.data.data[0].confidences[0].label);
			setConfidence((conf * 100).toFixed(2) + "%");
			setStatus("finish");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-screen min-h-screen bg-(--bg) flex flex-col justify-between">
			<Navbar active="Detect" />
			<div className="py-5 px-2 flex flex-col items-center">
				<div className="max-w-200 flex flex-col gap-10 w-full">
					<div className="text-5xl text-(--accent-dark) font-semibold text-center">
						Tuberculosis AI Detection
					</div>
					<div className="flex w-full space-between gap-5">
						<div className="w-1/2 bg-(--bg-light) rounded-md shadow-md p-2 flex flex-col gap-2">
							<div className="font-semibold text-xl text-center">
								Upload X-Ray
							</div>
							{selectedImage ? (
								<img
									src={URL.createObjectURL(selectedImage)}
									className="w-full aspect-square border-4 border-(--accent-dark) rounded-md"
								></img>
							) : (
								<div className="w-full aspect-square border-4 border-(--accent-dark) rounded-md"></div>
							)}
							<label
								htmlFor="image-upload"
								className="cursor-pointer bg-(--accent) text-(--bg) hover:bg-(--accent-dark) text-center rounded-md p-2"
							>
								<i className="fa-solid fa-arrow-up-from-bracket">
									{" "}
								</i>
								Upload Image
								<input
									type="file"
									accept="image/*"
									onChange={(e) => {
										setSelectedImage(e.target.files[0]);
									}}
									className="hidden"
									id="image-upload"
								/>
							</label>

							{selectedImage ? (
								<div
									className="bg-(--alert-red) text-(--bg) hover:bg-(--alert-red-dark) cursor-pointer text-center rounded-md p-2"
									onClick={() => {
										handleDetection();
									}}
								>
									Detect
								</div>
							) : (
								<div className="bg-(--bg-dark) text-(--text-muted) text-center rounded-md p-2">
									Detect
								</div>
							)}
						</div>
						<div className="w-1/2 bg-(--bg-light) rounded-md shadow-md p-2">
							<div className="font-semibold text-xl text-center">
								Result
							</div>
							<div className="flex items-center justify-center flex-col h-full">
								{status === "loading" ? (
									<div className="text-5xl">
										<i className="fa-solid fa-spinner fa-spin"></i>
									</div>
								) : status === "first" ? (
									<div className="text-xl">
										Upload image first
									</div>
								) : (
									<div>
										<div className="text-5xl font-semibold">
											{result === "Positive" ? (
												<div className="text-(--alert-red)">
													{result}
												</div>
											) : (
												<div className="text-(--alert-green)">
													{result}
												</div>
											)}
										</div>
										<div className="text-xl">
											Confidence: {confidence}
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Detection;
