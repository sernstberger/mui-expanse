import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FormProps {}

const StyledForm = styled.div`
  color: pink;
`;

export function Form(props: FormProps) {
  return (
    <StyledForm>
      <h1>Welcome to Form!</h1>
    </StyledForm>
  );
}

export default Form;
