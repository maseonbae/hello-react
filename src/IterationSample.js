import React, {useState} from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const removeElement = id => {
    const nextNames = names.filter(name => name.id != id);
    setNames(nextNames);
  };

  // 여기서 namesList는 단순히 <li />로 구성된 문자열이 아니라
  // 반복 요소 객체!!
  const namesList = names.map(name => <li key={name.id} onDoubleClick={() => removeElement(name.id)}>{name.text}</li>);

  const handleOnChange = e => {
    setInputText(e.target.value);
  };

  const handleOnClick = e => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    })
    setNextId(nextId + 1);

    // setter 함수를 이용해 state를 변경하기만 해도 {namesList}가 변경됨
    // 즉, {namesList}는 문자열 변수가 아니라 반복 요소 객체!!
    setNames(nextNames);

    setInputText("");
  };

  return (
    <>
      <input value={inputText} onChange={handleOnChange}/>
      <button onClick={handleOnClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;

