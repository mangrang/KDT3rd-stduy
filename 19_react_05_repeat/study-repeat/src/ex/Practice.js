import { useState } from "react";
import "./Practice.css";

const Practice = () => {
  const [privercy, setPrivercy] = useState([]);

  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [nextId, setNextId] = useState(1);
  const addAlpha = () => {
    // 기존의 alphabets state에 새로 입력된 input 값 추가
    const newPrivercy = privercy.concat({
      id: nextId,
      name: inputName,
      email: inputEmail,
    });
    setPrivercy(newPrivercy); // alphabets state에 newAlpha 추가
    setNextId(nextId + 1);
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
    const result = privercy.filter((a) => a.id !== id);
    setPrivercy(result);
  };

  return (
    <div>
      <label>작성자</label>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="작성자"
      />
      <label>제목</label>
      <input
        type="text"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addAlpha}>작성</button>
      <br />
      <br />

         <table border="1"  width ="600" height="100" align = "center">
        <tr>
          <th>번호</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
        {privercy.map((a) => {
          return <tr>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.email}</td>
          </tr>;
        })}
      </table>


    </div>
  );
};

export default Practice;
