import { GlobalStyles } from "./GlobalStyles";
import * as S from "./App.styled";
import AppRoute from "./routes";

function App() {
    return (
        <>
            <GlobalStyles />
            <S.Wrapper>
                <S.Container>
                    <AppRoute />
                </S.Container>
            </S.Wrapper>
        </>
    );
}

export default App;
