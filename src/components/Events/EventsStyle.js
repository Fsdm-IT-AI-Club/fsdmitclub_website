import styled from "styled-components";

export const Container = styled.div`
	background: #f5faff;
	display: flex;
	justify-content: center;
	position: relative;
	z-index: 0;
	align-items: center;
	padding: 3rem 0;
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 1350px;
	padding: 10px 0px 100px 0;
	gap: 12px;
	@media (max-width: 1060px) {
		text-align: center;
	}
	@media (max-width: 700px) {
		text-align: center;
		max-width: 900px;
		gap: 50px;
	}
`;

export const Title = styled.div`
	font-size: 42px;
	text-align: center;
	font-weight: 600;
	margin-top: 20px;
	color: #2f4ea1;
	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 32px;
	}
`;

export const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	max-width: 600px;
	color: #444ea1;
	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 16px;
	}
`;
export const CardContainer = styled.div`
	width: 100%;
	max-width: 1200px;
	padding: 0 50px 0;
	text-align: center;
`;
