import React from "react";
import "./Navbar.scss";

import { NavLink } from "react-router-dom";

//Image imports

function Navbar(props) {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);

	return (
		<div>
			<div
				className={click ? "main-container" : ""}
				onClick={() => Close()}
			/>
			<nav className="navbar padding" onClick={(e) => e.stopPropagation()}>
				<div className="nav-container">
					<NavLink to="/" className="nav-logo">
						<img
							src={window.getStatic("assets/logo1.png")}
							alt=""
							className="nav-logo__icon"
						/>
						<div className="nav-logo__text-container">
						<span className="nav-logo__text">Satya's Lie Guard</span>
						<span className="nav-logo__subtext">Fake News Detector AI</span>
						</div>
					</NavLink>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<NavLink
								to="/"
                                exact
								className="nav-links"
                                activeClassName="active-links"
								onClick={click ? handleClick : null}
                                
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/tos"
								className="nav-links"
                                activeClassName="active-links"
								onClick={click ? handleClick : null}
							>
								Terms of Service
							</NavLink>
						</li>
						<li className="nav-item">
							{ window.authenticated?<NavLink
								to="/accounts/login"
								className="nav-links"
                                activeClassName="active-links"
								onClick={click ? handleClick : null}
							>
								Logout
							</NavLink> :<NavLink
								to="/accounts/login"
								className="nav-links"
                                activeClassName="active-links"
								onClick={click ? handleClick : null}
							>
								Login/Register
							</NavLink> }
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? "fa fa-times" : "fa fa-bars"}></i>
					</div>
				</div>
			</nav>
		</div>
	);
}
import "./Navbar.scss";

export default Navbar;