import styled from "styled-components";

const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10%;
  height: 100%;
  width: 90%;
  min-width: 16.294rem;
  max-width: 20.313rem;
  min-height: 1rem;
  max-height: 4.688rem;
  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: var(--Grey-0);
    font-weight: 400;
    font-size: 0.609rem;
    span {
      color: red;
    }
  }
  div {
    width: 100%;
    height: 20%;
    background: var(--Grey-2);
    input {
      width: 90%;
      height: 20%;
      min-height: 2.406rem;
      max-height: 3rem;
      background-color: var(--Grey-2);
      outline: var(--Grey-0);
      border: 2px solid var(--Grey-2);
      padding-left: 5%;
      color: var(--Grey-0);
      ::placeholder {
        color: var(--Grey-50);
      }
    }
    button {
      width: 10%;
      height: 100%;
      background-color: transparent;
      border: 3px solid transparent;
      cursor: default;
      svg {
        color: red;
        width: 100%;
        height: 50%;
      }
    }
  }
  div {
    position: relative;
    display: block;
    width: 100%;
    height: 20%;
    min-height: 2.406rem;
    max-height: 3rem;
    overflow: hidden;
    border-radius: 0.25em;
  }

  select {
    padding-left: 5%;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    background-color: var(--Grey-2);
    background-image: none;
    border: 1px solid black;
    width: 100%;
    height: 20%;
    min-height: 2.406rem;
    max-height: 3rem;
    background-color: var(--Grey-2);
    outline: var(--Grey-0);
    border: 1px solid var(--Grey-2);
    border-radius: 0.2rem;
    color: var(--Grey-1);
    cursor: pointer;
    ::-ms-expand {
      display: none;
    }
  }
`;

export default DivInput;
