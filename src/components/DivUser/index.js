import styled from "styled-components";

const DivUser = styled.div`
  width: 100%;
  min-width: 18.5rem;
  min-height: 131px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--Grey-3);
  border-top: 1px solid var(--Grey-3);
  div {
    width: 100%;
    max-width: 48.75rem;
    h2 {
      display: flex;
      line-height: 3;
      color: var(--Grey-0);
      padding-left: 5%;

      font-weight: 700;
      font-size: 18px;
    }
    p {
      padding-left: 5%;
      line-height: 1;
      color: var(--Grey-1);
      font-weight: 400;
      font-size: 12px;
    }
  }
`;
export default DivUser;
