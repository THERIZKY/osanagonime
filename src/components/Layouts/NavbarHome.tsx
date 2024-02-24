import NavButton from "../Elements/NavButton";

const NavHomePage = ({ status }: any) => {
	return (
		<>
			<div className="navbar  w-full pt-20 flex justify-center">
				<NavButton gapSize="gap-20" size="[35px]" hoverColor="text-orange-700" status={status} />
			</div>
		</>
	);
};

export default NavHomePage;
