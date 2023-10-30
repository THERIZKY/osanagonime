import NavButton from "../Elements/NavButton";

const NavHomePage = () => {
	return (
		<>
			<div className="navbar  w-full pt-20 flex justify-center">
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
