import React, { useState } from "react";
import { useParams } from "react-router-dom";
import questions from "../data/questions";

const Questions = () => {
  const [questionNum, setQuestionNum] = useState(1);
  const param = useParams();

  return (
    <section>
      <h2>{}</h2>
      <button></button>
      <button></button>
    </section>
  );
};

export default Questions;
