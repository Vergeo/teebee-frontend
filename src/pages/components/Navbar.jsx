import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
	const navigate = useNavigate();

	const links = [
		["Home", "/"],
		["Information", "/information"],
		["About Us", "/about_us"],
	];

	return (
		<div className="w-screen p-2">
			<div className="w-full h-12 px-5 bg-(--bg-dark) rounded-md flex items-center justify-between shadow-md">
				<div className="text-(--accent-dark) font-semibold text-xl">
					TeeBee
				</div>
				<div className="flex gap-10 items-center">
					{links.map((link) => (
						<div
							key={link[0]}
							className={
								props.active === link[0]
									? "text-(--accent-dark)"
									: "cursor-pointer hover:text-(--accent) transition-all ease-in"
							}
							onClick={
								props.active === link[0]
									? () => {}
									: () => {
											navigate(link[1]);
									  }
							}
						>
							{link[0]}
						</div>
					))}
					<div
						className="px-4 py-1 bg-(--accent) hover:bg-(--accent-dark) text-(--bg) transition-all ease-in rounded-sm cursor-pointer"
						onClick={() => {
							navigate("/detect");
						}}
					>
						Detect Now
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
