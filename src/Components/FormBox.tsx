import { styled } from 'styled-components';
import { FaDivide, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { input1Value, input2Value, resultValue, resultVisible } from '../atom';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-200);
    padding: var(--padding-double-large);
    border-radius: 10px;
`;

const InputBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--margin-medium-large);
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
        div {
            margin: var(--margin-medium);
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        div {
            margin: var(--margin-medium);
        }
    }
`;

const Label = styled.label`
    margin: 0 var(--margin-medium);
    color: var(--primary-100);
`;

const Input = styled.input`
    padding: var(--padding-double-small);
    border-radius: 10px;
    font-size: var(--font-size-small);
    outline: 2px solid var(--primary-200);
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
    //state
    const [input1, setInput1] = useRecoilState<number>(input1Value);
    const [input2, setInput2] = useRecoilState<number>(input2Value);
    const setResult = useSetRecoilState(resultValue);
    const setVisible = useSetRecoilState(resultVisible);
    const getInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput1(Number(e.target.value));
    };

    const getInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput2(Number(e.target.value));
    };
    //function
    const handleOperation =
        (operator: string) =>
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();

            if (input1 === 0 && input2 === 0) {
                alert('입력란에 숫자를 입력해 주세요.');
                return;
            }

            let newValue: number = 0;

            const num1 = Number(input1);
            const num2 = Number(input2);

            switch (operator) {
                case 'add':
                    newValue = num1 + num2;
                    break;
                case 'subtract':
                    newValue = num1 - num2;
                    break;
                case 'multiply':
                    newValue = num1 * num2;
                    break;
                case 'divide':
                    newValue = num1 / num2;
                    break;
                default:
                    newValue = 0;
                    break;
            }

            setResult(newValue);
            setInput1(0);
            setInput2(0);
            setVisible(false);

            setTimeout(() => {
                setVisible(true);
            }, 1000);
        };

    return (
        <FormWrapper>
            <InputBox>
                <div>
                    <Label htmlFor="input1">입력 1 : </Label>
                    <Input
                        onChange={getInput1}
                        type="number"
                        id="input1"
                        value={input1}
                        placeholder="ex) 2"
                    />
                </div>
                <div>
                    <Label htmlFor="input2">입력 2 : </Label>
                    <Input
                        onChange={getInput2}
                        type="number"
                        value={input2}
                        id="input2"
                        placeholder="ex) 4"
                    />
                </div>
            </InputBox>
            <ButtonBox>
                <Button type="button" onClick={handleOperation('add')}>
                    <FaPlus />
                </Button>
                <Button type="button" onClick={handleOperation('subtract')}>
                    <FaMinus />
                </Button>
                <Button type="button" onClick={handleOperation('multiply')}>
                    <FaTimes />
                </Button>
                <Button type="button" onClick={handleOperation('divide')}>
                    <FaDivide />
                </Button>
            </ButtonBox>
        </FormWrapper>
    );
}
