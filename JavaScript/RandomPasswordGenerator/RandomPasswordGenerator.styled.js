import styled from "styled-components";

export const h2 = styled.h2`
  margin: 10px 0 20px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(25, 103, 151);
  border-radius: 50px;
  box-shadow: 0px 2px 10px rgb(25, 103, 151);
  padding: 20px;
  width: 350px;
  max-width: 100%;
`;

export const ResultContainer = styled.div`
  background-color: rgb(51, 178, 217);
  border-radius: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 12px 10px;
  height: 50px;
  width: 100%;
`;

export const Result = styled.span`
color: whitesmoke;
  word-wrap: break-word;
  max-width: calc(100% - 40px);
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    width: 1rem;
  }
`;

export const ClipboardButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 50px;
`;

export const Button = styled.button`
  background-color: #3b3b98;
  color: #fff;
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
`;

export const LargeButton = styled.button`
  display: block;
  align-items: center;
  background-color: rgb(51, 178, 217);
  border-radius: 50px;
  width: 50%;
  border: none;
  height: 50px;
`;

export const Setting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;
