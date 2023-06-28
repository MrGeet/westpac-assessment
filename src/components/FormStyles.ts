import styled from 'styled-components';
import { Container } from './../globalStyles';

export const FormCard = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  font-size: clamp(0.8rem, 2vw, 1rem);
  background-color: white;
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 'Tiempos Text';
  > button {
    margin-top: 3rem;
    font-size: 16px;
    font-weight: 600;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    width: 50%;
    align-self: center;
    transition: background-color 0.3s ease-in-out;
    background: #d5002b;
    color: white;

    &:hover {
      background: #a30021;
    }
    &:disabled {
      cursor: auto;
      color: rgb(0 0 0 / 50%);
      background-color: #0000001f;
    }
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border: 1px solid gray;
  border-color: '#da0000';
  border-radius: 3px;
  height: 40px;
  width: 100%;
  margin-top: 0.2rem;
  font-size: clamp(0.8rem, 2vw, 1rem);

  &:focus {
    box-shadow: rgb(41, 126, 243) 0px 0px 6px;
    border-color: rgb(41, 126, 243);
    outline: none;
  }
`;

export const Label = styled.label`
  color: darkgray;
  font-size: 14px;
`;

export const FormValidationWrapper = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: translateY(-20px);
  opacity: 0;
  visibility: hidden;
  position: absolute;
  &.active {
    transform: translateY(0);
    display: block;
    opacity: 1;
    visibility: visible;
    position: relative;
  }

  > div {
    display: flex;
    align-items: center;
    transition: color 0.4s ease-in-out;
  }

  > .correct {
    color: limegreen;
  }

  > .incorrect {
    color: red;
  }
  > .default {
    color: #2f2f2f;
  }
`;
