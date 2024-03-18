import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const HeaderName = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const HeaderImg = styled.img`
    width: 65px;
`;

export const HeaderText = styled.h1`
    color: rgb(71, 147, 255);
`;

export const HeaderInput = styled.input`
    width: 194px;
    height: 37px;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 15px;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

export const HeaderButton = styled.button`
    width: 88px;
    height: 37px;
    font-size: 15px;
    background: rgb(71, 147, 255);
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;
