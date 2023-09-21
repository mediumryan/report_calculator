import { styled } from 'styled-components';
import './CSS/index.css';
import Header from './Components/Header';
import FormBox from './Components/FormBox';

const MainWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(var(--bg-100), var(--bg-200));
    color: var(--text-100);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-double-large);
`;

function App() {
    return (
        <MainWrapper>
            <Header />
            <FormBox />
            <div id="results">
                <h4 class="result_title">결과값은</h4>
                <p>
                    <span class="result_value"></span> 입니다!
                </p>
            </div>
            <footer>Simple Calculator app by Ryan</footer>
        </MainWrapper>
    );
}

export default App;
