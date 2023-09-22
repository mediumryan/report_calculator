import { styled } from 'styled-components';

const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0;
    color: var(--accent-100);
    font-size: var(--font-size-small);
    padding: var(--padding-medium) 0;
    opacity: 0.25;
    cursor: default;
    transition: 300ms opacity;
    &:hover {
        opacity: 1;
    }
`;

export default function Footer() {
    return <FooterWrapper>Simple Calculator app by Ryan</FooterWrapper>;
}
