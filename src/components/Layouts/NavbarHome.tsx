import NavButton from "../Elements/NavButton";

const NavHomePage = () => {
	return (
		<>
			<div className="navbar w-full py-8 flex justify-center bg-slate-800">
				<NavButton
					gapSize="gap-20"
					size="[35px]"
					hoverColor="text-orange-700"
				/>
			</div>
		</>
	);
};

export default NavHomePage;
