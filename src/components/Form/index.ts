import styled from "styled-components";
interface IStyledProps{
  height: string;
}
const Form = styled.form<IStyledProps>`
  padding: 10px;
  color: var(--Grey-0);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  width: clamp(18.5rem, 70%, 23.125rem);
  height: ${(props) => `${props.height}`};
  max-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Grey-3);
  gap: 0.1%;
  justify-content: space-around;
  min-height: 18.75rem;
  border-radius: 0.2rem;
  @media (min-width: 1025px) {
    padding: 20px 10px;
  }
  h2 {
    font-weight: 700;
    font-size: 0.899rem;
  }
  p {
    margin-top: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Grey-1);
    height: 5%;
    font-weight: 400;
    font-size: 0.6rem;
  }
`;
export default Form;
