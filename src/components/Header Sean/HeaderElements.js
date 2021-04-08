import styled from 'styled-components';

const headerBG = "#000";
const brandColor = "#fff";
const pageNameColor = "#aaa";

export const HeaderWarp = styled.div`
background: ${headerBG};
padding: 0 0 0 10px;
display: flex;
height: 5vh;
margin: 0;
align-items: center;
`;

export const Brand = styled.div`
font-family: "Arial Black";
font-size: 16px;
color: ${brandColor};
margin-left: 2rem;
`;

export const PageName = styled.div`
color: ${pageNameColor};
margin-left: 1rem;
`;