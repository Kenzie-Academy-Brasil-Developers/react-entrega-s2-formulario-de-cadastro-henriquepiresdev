import styled from "styled-components";
interface IStyledProps{
  height: string;
}
const Container = styled.div<IStyledProps>`
  width: 100%;
  height: ${(props) => `${props.height}`};
  background-color: var(--Grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5%;
  h1 {
    color: var(--color-primary);
    margin-bottom: 2%;
  }
`;
export default Container;
