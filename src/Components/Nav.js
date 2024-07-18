import logo from "../Images/TestLogo.svg";
import NavLinks from "./Nav-links";
import NavProfile from "./Profile";

export default function Navbar() {
	return (
		<nav>
			<img
				className="logo"
				src={logo}
				alt="Logo for TechCare"
			></img>
			<NavLinks/>
            <NavProfile/>
		</nav>
	);
}
