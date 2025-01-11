import React, { useState } from "react";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBCollapse,
	MDBIcon,
} from "mdb-react-ui-kit";
import Signature from "../../assets/signature.png";

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

	return (
		<MDBNavbar sticky expand="lg" dark bgColor="dark">
			<MDBContainer fluid>
				<MDBNavbarBrand href="#">
					<img src={Signature} height="30" alt="" loading="lazy" />
				</MDBNavbarBrand>
				<MDBNavbarToggler
					type="button"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowNav(!showNav)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>
				<MDBCollapse navbar show={showNav}>
					<MDBNavbarNav>
						<MDBNavbarItem>
							<MDBNavbarLink
								active
								aria-current="page"
								href="#about"
							>
								About
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href="#projects">
								Projects
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href="#resume">Resume</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href="#">Contact</MDBNavbarLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}
