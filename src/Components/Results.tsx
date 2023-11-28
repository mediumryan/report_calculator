import React from 'react';
import { useRecoilValue } from 'recoil';
import { resultValue, resultVisible } from '../atom';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const ResultWrapper = styled(motion.div)`
    width: 400px;
    height: 150px;
    background-color: var(--bg-200);
    margin-top: var(--margin-very-large);
    padding: var(--padding-medium);
    font-size: var(--font-size-medium-large);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: var(--accent-100) 2px 2px 4px 2px;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 250px;
    }
`;

const ResultValue = styled.p`
    span {
        font-size: var(--font-size-huge);
        font-weight: 800;
        color: var(--primary-100);
    }
`;

const result_variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.5,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 1.5,
        },
    },
};

export default function Results() {
    const result = useRecoilValue(resultValue);
    const visible = useRecoilValue(resultVisible);

    return (
        <div>
            {visible ? (
                <ResultWrapper
                    variants={result_variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <span>결과값은</span>
                    <ResultValue>
                        <span>{result}</span> 입니다!
                    </ResultValue>
                </ResultWrapper>
            ) : null}
        </div>
    );
}
