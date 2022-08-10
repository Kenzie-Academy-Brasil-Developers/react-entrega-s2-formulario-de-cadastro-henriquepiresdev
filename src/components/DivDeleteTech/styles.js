import styled from "styled-components";
const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(12, 12, 12, 0.621);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;
export { ContainerModal };

const Modal = styled.section`
  width: clamp(296px, 80%, 396px);

  height: clamp(174px, 50%, 242px);
  background-color: yellow;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--Grey-2);
  border-radius: 8px;

  div {
    h3 {
      font-size: 16px;
      color: var(--Grey-0);
      padding-left: 5%;
      line-height: 2;
      font-weight: 700;
    }
    button {
      background-color: transparent;
      border: transparent;
      height: 100%;
    }
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: clamp(196px, 100%, 396px);
    height: clamp(134px, 90%, 292px);
    background-color: var(--Grey-3);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    div {
      display: flex;
      flex-direction: column;
    }
    section {
      display: flex;
      height: 20%;
      width: 95%;
      justify-content: space-around;

      button {
        border-radius: 8px;
        height: 100%;
        width: 40%;
        font-weight: 500;
        color: var(--Grey-0);
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        :last-child {
          background-color: var(--Grey-4);
          border: 3px solid var(--Grey-4);
          font-weight: 500;
          color: var(--Grey-0);
        }
      }
    }
  }
`;
export { Modal };
