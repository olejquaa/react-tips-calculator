import styled from "styled-components";
import CornerImage from "./assets/images/cornerCircles.svg";


export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr;
align-items: center;
justify-items: center;
background: top left url(${CornerImage}) no-repeat #eaf2f2;
`;







