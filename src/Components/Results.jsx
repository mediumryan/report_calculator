import React from 'react';
import { useRecoilValue } from 'recoil';
import { resultValue, resultVisible } from '../atom';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const ResultWrapper = styled(motion.div)`
    width: 250px;
    height: 200px;
    background-color: var(--bg-200);
    margin-top: var(--margin-large);
    padding: var(--padding-medium);
    font-size: var(--font-size-small);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const ResultValue = styled.p`
    span {
        font-size: var(--font-size-medium);
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
