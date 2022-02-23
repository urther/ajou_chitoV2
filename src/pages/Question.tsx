import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import questions from "../data/questions";

type param = {
  id: string;
};

type props = {
  result: {};
  setResult: React.Dispatch<
    React.SetStateAction<{
      EI: number;
      SN: number;
      NF: number;
      PJ: number;
    }>
  >;
};

const Questions = (props: props) => {
  const [questionNum, setQuestionNum] = useState(1);

  const history = useHistory();
  const params: param = useParams();
  const id = +params.id - 1;

  const addResultType = () => {
    // tmp_result[questions[id].type]++;
  };

  const nextStep = () => {
    if (questionNum <= 12) {
      setQuestionNum(questionNum + 1);
      history.push(`/${questionNum}`);
    } else history.push("/result");
  };

  return (
    <section>
      <h2>{questions[id].title}</h2>
      <button>{questions[id].A}</button>
      <button onClick={() => nextStep()}>{questions[id].B}</button>
    </section>
  );
};

export default Questions;
