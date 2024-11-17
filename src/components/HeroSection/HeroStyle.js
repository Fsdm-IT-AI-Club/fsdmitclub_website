import styled from "styled-components";



  
import backImage2 from '/src/assets/fsdm_it_grp.jpg';


export const HeroContainer = styled.div`
    background: url("/src/assets/back.jpeg");
    background-size: cover; /* Ensures the image covers the entire container */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    background: rgb(255, 255, 255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 24%, rgba(47,78,161,0.6134103299522935) 60%), url(${backImage2});
    background-size: cover; /* Ensures the image covers the entire container */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    display: flex;
    justify-content: center;
    position: relative;
    height: 100vh;
    padding: 20px 30px 100px;

    /* Animation */
    animation: backgroundScroll 10s ease-in-out infinite; /* 10s duration, infinite repeat */

    @keyframes backgroundScroll {
        0% {
            background-position: center;
        }
        100% {
            background-position: right center;
        }
    }

    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
    z-index: 1;
`;

export const HeroBg = styled.div`
	position: absolute;
	display: flex;
	justify-content: end;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	max-width: 1360px;
	overflow: hidden;
	padding: 0 30px;
	top: 50%;
	left: 50%;
	-webkit-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);

	@media (max-width: 960px) {
		justify-content: center;
		padding: 0 0px;
	}
`;

export const HeroInnerContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1100px;
	height: 70vh;
	@media (max-width: 960px) {
		flex-direction: column;
		height: 45vh;
	}
`;
export const HeroLeftContainer = styled.div`
	width: 100%;
	order: 1;

	@media (max-width: 960px) {
		order: 2;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 640px) {
		order: 2;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const HeroRightContainer = styled.div`
	width: 100%;
	display: flex;
	order: 2;
	justify-content: end;
	gap: 12px;
	@media (max-width: 960px) {
		order: 1;
		justify-content: center;
		align-items: center;
		margin-bottom: 80px;
	}

	@media (max-width: 640px) {
		margin-bottom: 30px;
	}
`;

export const Img = styled.img`
	position: relative;
	width: 100%;
	height: 100%;
	max-width: 400px;
	max-height: 400px;
	margin-top: 100px;

	@media (max-width: 768px) {
		max-width: 400px;
		max-height: 400px;
	}

	@media (max-width: 640px) {
		max-width: 280px;
		max-height: 280px;
	}
`;

export const Title = styled.div`
	font-weight: 700;
	font-size: 50px;
	color: ${({ theme }) => theme.black};
	line-height: 68px;
	@media (max-width: 960px) {
		text-align: center;
	}

	@media (max-width: 640px) {
		font-size: 40px;
		line-height: 48px;
		margin-bottom: 8px;
	}
`;

export const Span = styled.span`
	color: ${({ theme }) => theme.primary};
	cursor: pointer;
`;

export const SubTitle = styled.div`
	font-size: 20px;
	line-height: 32px;
	margin-bottom: 42px;
	color: ${({ theme }) => theme.black + 95};

	@media (max-width: 960px) {
		text-align: center;
	}

	@media (max-width: 640px) {
		font-size: 16px;
		line-height: 32px;
	}
`;

export const JoinBtn = styled.a`
	-webkit-appearance: button;
	-moz-appearance: button;
	appearance: button;
	text-decoration: none;
	width: 95%;
	max-width: 300px;
	text-align: center;
	padding: 16px 0;
	color: white;
	border-radius: 10px;
	cursor: pointer;
	font-size: 20px;
	font-weight: 600;
	transition: all 0.2s ease-in-out !important;
	background: #2f4ea1;

	&:hover {
		background: hsl(0, 0%, 0%);
		transform: scale(1.05);
		transition: all 0.4s ease-in-out;
		box-shadow: 20px 20px 60px #494141;
		filter: brightness(1);
	}

	@media (max-width: 640px) {
		padding: 12px 0;
		font-size: 18px;
	}
`;
