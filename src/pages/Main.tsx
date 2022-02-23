import React from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  return (
    <main>
      <h1>나의 치토 찾기 테스트V2</h1>
      <h2>나는 어디에 사는 치토일까?</h2>
      <button onClick={() => history.push("/1")}>테스트 시작</button>
    </main>
  );
};

export default Main;
