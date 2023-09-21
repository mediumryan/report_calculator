import { styled } from 'styled-components';
import { FaDivide, FaMinus, FaPlus } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

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
    return (
        <FormWrapper>
            <InputBox>
                <Label htmlFor="input1">입력 1 : </Label>
                <Input type="number" id="input1" placeholder="ex) 2" required />
                <Label htmlFor="input2">입력 2 : </Label>
                <Input type="number" id="input2" placeholder="ex) 4" required />
            </InputBox>
            <ButtonBox>
                <Button>
                    <FaPlus />
                </Button>
                <Button>
                    <FaMinus />
                </Button>
                <Button>
                    <MdCancel />
                </Button>
                <Button>
                    <FaDivide />
                </Button>
            </ButtonBox>
        </FormWrapper>
    );
}
