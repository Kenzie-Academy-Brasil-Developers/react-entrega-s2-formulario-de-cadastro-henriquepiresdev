import styled from 'styled-components'

const Main = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export { Main };

const DivLista = styled.div`
  width: 100%;
  min-width: 18.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  div {
    margin-top: 0.2%;
    width: 100%;
    max-width: 48.75rem;
    display: flex;
    height: 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h3 {
      padding-left: 5%;
      color: var(--Grey-0);
      font-size: 1rem;
    }
    button {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10%;
      height: 100%;
      font-size: 22px;
      font-weight: 400;
      color: #ffffff;
      background-color: var(--Grey-3);
      border: 3px solid var(--Grey-3);
      border-radius: 0;
      max-width: 32.49px;
      max-height: 32px;
    }
  }
  ul {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 5px;
    }
    padding-top: 15px;
    margin-top: 0.3rem;
    background-color: var(--Grey-3);
    list-style: none;

    width: 100%;
    max-width: 48.75rem;
    height: 100%;
    min-height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 4px;
    li {
      width: 95%;
      min-height: 48.73px;

      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px;
      color: var(--Grey-0);
      background-color: var(--Grey-4);
      font-size: 0.888rem;
      &:hover {
        background-color: var(--Grey-2);
      }
      span {
        width: 50%;
        max-width: 150px;
        height: 20px;
        color: var(--Grey-1);
        font-size: 0.761rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 5%;
        button {
          width: 20%;
          border-radius: 6px;
          background-color: var(--Grey-1);
          border: none;
          color: var(--Grey-1);
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          svg {
            color: black;
          }
          &:hover {
            color: var(--Grey-0);
          }
        }
      }
    }
  }
`;
export { DivLista };

const Footer = styled.footer`
  margin-top: 1%;
  width: 100%;
  height: 40px;
  background-color: var(--Grey-4);
  display: flex;
  justify-content: center;
  h6 {
    color: var(--color-primary);
    font-size: 0.6rem;
    font-weight: 500;
  }
`;
export { Footer };
