import { atom } from 'recoil';

export const input1Value = atom({
    key: 'input1_value',
    default: 0,
});

export const input2Value = atom({
    key: 'input2_value',
    default: 0,
});

export const resultValue = atom({
    key: 'result_value',
    default: 0,
});

export const resultVisible = atom({
    key: 'result_visible',
    default: false,
});
