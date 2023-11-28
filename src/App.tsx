import { styled } from 'styled-components';
import './CSS/index.css';
import Header from './Components/Header';
import FormBox from './Components/FormBox';
import Footer from './Components/Footer';
import Results from './Components/Results';

const MainWrapper = styled.div`
    position: relative;
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
            <Results />
            <Footer />
        </MainWrapper>
    );
}

export default App;
