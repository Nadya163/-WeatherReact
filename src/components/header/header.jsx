/* eslint-disable react/prop-types */
import * as S from "./header.styled";

function Header({ handleSearch, handleChangeCity }) {
    return (
        <S.Header>
            <S.HeaderName>
                <S.HeaderImg src="./../../../public/Header logo.svg" />
                <S.HeaderText>Weather React</S.HeaderText>
            </S.HeaderName>
            <S.HeaderName>
                <S.HeaderInput
                    id="cityInput"
                    type="text"
                    placeholder="Название города..."
                    onChange={handleChangeCity}
                />
                <S.HeaderButton type="button" onClick={handleSearch}>
                    Найти
                </S.HeaderButton>
            </S.HeaderName>
        </S.Header>
    );
}

export default Header;
