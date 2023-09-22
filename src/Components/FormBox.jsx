import { styled } from 'styled-components';
import { FaDivide, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { input1Value, input2Value } from '../atom';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-200);
    padding: var(--padding-double-medium);
    border-radius: 10px;
`;

const InputBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--margin-medium);
`;

const Label = styled.label`
    margin: 0 var(--margin-medium);
    color: var(--primary-100);
`;

const Input = styled.input`
    padding: var(--padding-double-small);
    border-radius: 10px;
    font-size: var(--font-size-small);
`;

const ButtonBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const Button = styled.button`
    font-size: var(--font-size-medium);
    color: var(--primary-100);
    transition: 300ms all;
    &:hover {
        color: var(--primary-200);
        transform: scale(1.05);
    }
`;

export default function FormBox() {
    const [input1, setInput1] = useRecoilState(input1Value);
    const [input2, setInput2] = useRecoilState(input2Value);
    const getInput1 = (e) => {
        setInput1(e.target.value);
    };
    const getInput2 = (e) => {
        setInput2(e.target.value);
    };

    const addValue = (e) => {
        e.preventDefault();
        const newValue = parseInt(input1) + parseInt(input2);
        console.log(newValue);
    };
    const subtractValue = (e) => {
        e.preventDefault();
        const newValue = parseInt(input1) - parseInt(input2);
        console.log(newValue);
    };
    const multiplyValue = (e) => {
        e.preventDefault();
        const newValue = parseInt(input1) * parseInt(input2);
        console.log(newValue);
    };
    const divideValue = (e) => {
        e.preventDefault();
        const newValue = (parseInt(input1) / parseInt(input2)).toFixed(2);
        console.log(newValue);
    };

    console.log(input1, input2);

    return (
        <FormWrapper>
            <InputBox>
                <Label htmlFor="input1">입력 1 : </Label>
                <Input
                    onChange={getInput1}
                    type="number"
                    id="input1"
                    placeholder="ex) 2"
                />
                <Label htmlFor="input2">입력 2 : </Label>
                <Input
                    onChange={getInput2}
                    type="number"
                    id="input2"
                    placeholder="ex) 4"
                />
            </InputBox>
            <ButtonBox>
                <Button type="submit" onClick={addValue}>
                    <FaPlus />
                </Button>
                <Button type="submit" onClick={subtractValue}>
                    <FaMinus />
                </Button>
                <Button type="submit" onClick={multiplyValue}>
                    <FaTimes />
                </Button>
                <Button type="submit" onClick={divideValue}>
                    <FaDivide />
                </Button>
            </ButtonBox>
        </FormWrapper>
    );
}
