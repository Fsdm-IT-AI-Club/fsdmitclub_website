import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	top: 0;
	position: sticky;
	z-index: 10;
	@media (max-width: 960px) {
		trastion: 0.8s all ease;
	}
`;
export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
	width: 80%;
	padding: 0 6px;
	display: flex;
	justify-content: start;
	align-items: center;
	text-decoration: none;
	@media (max-width: 640px) {
		padding: 0 0px;
	}
`;
export const Span = styled.div`
	padding: 0 4px;
	font-weight: bold;
	font-size: 18px;
`;
export const NavItems = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 32px;
	padding: 0 6px;
	list-style: none;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavLink = styled.a`
	color: white;
	font-weight: 800;
	font-size: 1.2rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		color: #071c54;
		-webkit-text-stroke-width: 0;
		text-stroke-width: 0;
	}
	-webkit-text-stroke: 1px #071c5480;

	&:active {
		border-bottom: 2px solid white;
	}
`;

export const OpenPositionBtn = styled.a`
	border: 1.8px solid #2f4ea1;
	justify-content: center;
	display: flex;
	align-items: center;
	background: #2f4ea1;
	border-radius: 10px;
	color: white;
	cursor: pointer;
	padding: 0.5rem 1.5rem;
	font-weight: 500;
	text-decoration: none;
	font-size: 16px;
	transition: all 0.6s ease-in-out;
	&:hover {
		background: black;
		color: white;
	}
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const ButtonContainer = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
	padding: 0 6px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.5rem;
		cursor: pointer;
		color: white;
	}
`;

export const MobileMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 50vh;
	padding: 40px 40px 24px 40px;
	background: white;
	border-bottom: 4px solid #1e2b4d;
	/*disable mouse events*/
	transition: all 0.6s ease-in-out;
	transform: ${({ isOpen }) =>
		isOpen ? "translateY(0)" : "translateY(-100%)"};
	/*border-radius: 0 0 20px 20px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);*/
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileMenuItems = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 32px;
	list-style: none;
	width: 100%;
	height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
	color: #ffffff;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	:hover {
		color: #425dd2;
	}

	&.active {
		border-bottom: 2px solid #1e2b4d;
	}
`;

export const MobileMenuButton = styled.a`
	border: 1.8px solid #1e2b4d;
	justify-content: center;
	display: flex;
	align-items: center;
	height: 70%;
	border-radius: 20px;
	color: #425dd2;
	cursor: pointer;
	padding: 0 20px;
	font-weight: 500;
	text-decoration: none;
	font-size: 16px;
	transition: all 0.6s ease-in-out;

	&:hover {
		background: #1e2b4d;
		color: white;
	}
`;

export const MobileLink = styled.a`
	color: #1e2b4d;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	:hover {
		color: #1e2b4d;
	}

	&.active {
		border-bottom: 2px solid #1e2b4d;
	}
`;

export const MobileNavLogo = styled(LinkR)`
	width: 80%;
	padding: 0 6px;
	display: flex;
	justify-content: start;
	align-items: center;
	text-decoration: none;
	@media (max-width: 640px) {
		padding: 0 0px;
	}
`;
