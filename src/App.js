import { styled } from 'styled-components';
import './CSS/index.css';

const MainWrapper = styled.div``;

function App() {
    return (
        <MainWrapper>
            <div id="explain">
                <h1>두 양수를 입력 후 원하는 버튼을 눌러주세요.</h1>
                <p>나누기의 경우 소수점은 제외됩니다.</p>
            </div>
            <div id="inputs">
                <input type="number" id="input1" placeholder="예) 2" required />
                <input type="number" id="input2" placeholder="예) 4" required />
            </div>
            <div id="buttons">
                <button class="plus_btn">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <button class="minus_btn">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <button class="multi_btn">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <button class="devi_btn">
                    <i class="fa-solid fa-divide"></i>
                </button>
            </div>
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
