import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  height: 100%;
  width: 100%;

  max-width: 450px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 6px;
  padding: 30px;

  > p {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      color: #444;
      font-weight: bold;
      margin-bottom: 8px;
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 3px;
      height: 45px;
      padding: 0 15px;
      font-size: 16px;
    }
  }
`;
