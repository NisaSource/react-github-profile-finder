import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Navbar = ({ icon, title }) => {
	const history = useHistory();

	return (
		<nav className="navbar bg-primary" onClick={() => history.push("/")}>
			<h4>
				<i className={icon} /> {title}
			</h4>
		</nav>
	);
};

Navbar.defaultProps = {
	title: "Github Profile Finder",
	icon: "fab fa-github",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
