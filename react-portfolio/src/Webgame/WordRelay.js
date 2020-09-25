import React, { useRef, useState } from "react";
import "./WordRelay.css";

const WordRelay = () => {
  const [word, setWord] = useState("박상돈");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmetForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="wordRelay">
      <div>{word}</div>
      <form onSubmit={onSubmetForm}>
        <label id="label" htmlFor="wordInput">
          글자를 입력해주세요
        </label>
        <input
          id="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        />
        <button>다음</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default WordRelay;
