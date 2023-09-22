import { styled } from 'styled-components';

const HeaderWrapper = styled.header`
    text-align: center;
    margin-bottom: var(--margin-very-large);
    h1 {
        color: var(--accent-100);
        font-size: var(--font-size-large);
        margin-bottom: var(--margin-medium-large);
    }
    p {
        margin: var(--margin-medium) 0;
        font-size: var(--font-size-small);
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Simple Calculator</h1>
            <p>두 양수를 입력 후 원하는 버튼을 눌러주세요.</p>
        </HeaderWrapper>
    );
}
