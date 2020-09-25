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
    <div className="wordrelay">
      <div className="wordrelay__name">제시어 : {word}</div>
      <div className="wordrelay__formContainer">
        <form className="wordrelay__form" onSubmit={onSubmetForm}>
          <label className="wordrelay__label">글자를 입력해주세요</label>
          <input
            className="wordrelay__input"
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
          />
          <button className="wordrelay__btn">Enter</button>
        </form>
      </div>
      <div className="wordrelay__result">{result}</div>
    </div>
  );
};

export default WordRelay;
