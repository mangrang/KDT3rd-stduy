import { useState } from "react";

const Event_ex = () => {
  const [privercy, setPrivercy] = useState([
    { id: 1, name: "코디", email: "cody@gmail.com" },
  ]);

  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [nextId, setNextId] = useState(2);
  const addAlpha = () => {
    // 기존의 alphabets state에 새로 입력된 input 값 추가
    const newPrivercy = privercy.concat({
      id : nextId,
      name: inputName,
      email: inputEmail,
    });
    setPrivercy(newPrivercy); // alphabets state에 newAlpha 추가
    setNextId(nextId + 1)
    setInputName(""); // input 초기화
    setInputEmail(""); // input 초기화
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") { 
      addAlpha();
    }
  };
  const deleteAlpha = (id) => {
    // console.log('>>>', id);
    const result = privercy.filter((a) => a.id !== id)
    setPrivercy(result)
  };

  return (
    <div>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="이름"
      />
      <input
        type="text"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        placeholder="이메일"
        onKeyPress={handleKeyPress}
      />
      <button onClick={addAlpha}>ADD</button>
      <ul>
        {/* 배열에는 s를 많이 붙임 */}
        {privercy.map((a) => {
          return <h2  key={a.id} onDoubleClick = {() => {
            deleteAlpha(a.id)
          }}>{a.name}: {a.email}
          </h2>;
        })}
      </ul>
    </div>
  );
};

export default Event_ex;
