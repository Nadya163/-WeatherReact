import styled from "styled-components";

export const Wrapper = styled.div`
    width: 1440px;
    min-height: 100%;
    margin: 0px auto;
    height: 100%;
    padding: 50px 140px 0px 140px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Container = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }
`;
