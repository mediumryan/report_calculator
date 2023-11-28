import { atom } from 'recoil';

interface AtomType<T> {
    key: string;
    default: T;
}

export const input1Value = atom<number>({
    key: 'input1_value',
    default: 0,
});

export const input2Value = atom<number>({
    key: 'input2_value',
    default: 0,
});

export const resultValue = atom<number>({
    key: 'result_value',
    default: 0,
});

export const resultVisible = atom<boolean>({
    key: 'result_visible',
    default: false,
});
