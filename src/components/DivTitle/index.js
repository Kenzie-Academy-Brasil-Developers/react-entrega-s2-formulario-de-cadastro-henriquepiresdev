import styled from "styled-components";

const DivTitle = styled.div`
  width: ${(props) => `${props.w}`};
  min-width: ${(props) => `${props.minW}`};
  height: 75px;
  max-width: ${(props) => `${props.maxW}`};
  min-height: ${(props) => `${props.height}`};
  max-height: 5.688rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: var(--color-primary);
    padding-left: ${(props) => `${props.p}`};
  }
  button {
    background-color: var(--Grey-3);
    color: var(--Grey-0);
    border: 3px solid var(--Grey-3);
    border-radius: 0.2rem;
    width: 20%;
    min-width: 79.54px;
    min-height: 31.95px;
    max-width: 3.468rem;
  }
`;
export default DivTitle;
