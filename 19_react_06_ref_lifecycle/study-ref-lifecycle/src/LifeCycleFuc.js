import { useState, useEffect } from 'react';

// 자식 컴포넌트
const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState('')

  useEffect(() => {
    // Mount 시점에 실행
    console.log('⭕ mount!');

    // Unmount 시점에 실행
    // : effect 
    return () => {
      console.log('❌ unmount!');
    };
  }, []);

  // Mount & unmount
  useEffect(() => {
    console.log('😎😎update!');
  })

  // text가 바뀔때 (update)만 실행
  useEffect(() => {
    console.log('🤣 only text state update', text);
  }, [text])

  return (
    <>
      <p>MyComponent {number}</p>
      <input type={text} value={text} onChange={(e) => setText(e.target.value)}></input>
    </>
  );
};

// 부모 컴포넌트
const LifeCycleFunc = () => {
  const [number, setNumber] = useState(3);
  const [visible, setVisible ] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
  };

  
  const changeVisibleState = () => {
    setVisible(!visible);
  };


  return (
    <>
      <h3>함수형 컴포넌트에서 LifeCycle 이해하기</h3>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} /> }
   
    </>
  );
};

export default LifeCycleFunc;