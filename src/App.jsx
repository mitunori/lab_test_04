import { useState } from "react";
import "./App.css";
import Test from "./Test";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const [test, setTest] = useState(100);

  // 追加したuseStateになります🤗
  const [flag, setFlag] = useState(false);

  // 新しいuseStateを作ります🤗
  const [num, setNum] = useState();
  console.log(num, "numの中身");
  // 更新の処理の練習です🤗
  const handleClick = () => {
    setTest(10000000000);
  };

  // 追加したuseStateのflagを更新する処理です🤗
  const handleFlagClick = () => {
    setFlag(!flag);
  };

  // 新しくおまじないを作ります🤗
  const handleNumClick = () => {
    const random = Math.floor(Math.random() * 3); //0,1,2
    setNum(random); //ボタンが押されるたびにランダムな数字が作られて、それが設定される
  };

  return (
    <>
      {/* Form.jsxを読み込みましょう！！ */}
      <Form />

      <br />
      <hr />

      {num === 1 && <h1>中吉</h1>}
      {num === 2 && <h1>小吉</h1>}

      <button onClick={handleNumClick}>ボタンを押しましょう</button>
      {/* 条件分岐の練習 */}

      {flag && <h1>今はtrueです</h1>}

      {!flag && <h1>今はfalseです</h1>}

      <div>{test}</div>

      {/* <button onClick={handleClick}>ボタンを押してみましょう</button> */}
      <button onClick={handleFlagClick}>ボタンを押してみましょう</button>

      <Test
        gs="07月30日react2回目"
        lab={17}
        react="目じるしの練習をしています"
      />

      <Button text="送信" />
      <br />
      <Button text="登録" />
    </>
  );
}

export default App;
