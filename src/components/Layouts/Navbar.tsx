import Image from "next/image";
import NavbarContainer from "../Templates/Base/Navbar/NavbarContainer";
import ButtonLink from "../Elements/Button/Link/NavigationLink";
import Heading from "../Elements/Text/Heading";
import FormContainer from "../Elements/Form/FormContainer";
import FormInput from "../Elements/Form/Input";
import Content from "../Elements/Content";

const Navbar = () => {
	return (
		<NavbarContainer>
			<div className="flex-1">
				<ButtonLink href="/" className="btn btn-ghost text-base md:text-xl">
					<Heading level={1}>OsanagoManga</Heading>
				</ButtonLink>
			</div>
			<Content className="flex-none gap-2">
				<FormContainer className="input-group">
					<FormInput type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
				</FormContainer>

				{/* Jangan Dihapus Nanti Dipake Buat User kalo udah login */}
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<Image width={50} height={50} alt="Tailwind CSS Navbar component" src="/user-profil.svg" />
						</div>
					</div>
					<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</Content>
		</NavbarContainer>
	);
};

export default Navbar;
