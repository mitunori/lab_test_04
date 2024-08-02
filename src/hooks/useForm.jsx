import React, { useState, useEffect } from "react";

// ここかに書いていきます🤗
export const useForm = () => {
  //1. useStateを使ってinputタグの入力欄を制御します🤗
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //3. API通信
  const [data, setData] = useState("");

  // 名前を入力する用のおまじない
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Emailを入力する用のおまじない
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //2. useEffectのお勉強をしましょう🤗
  useEffect(() => {
    //どのような挙動になるかチェックしてみましょう🤗
    // console.log("発火！！！");

    // apiの通信の処理を記入します🤗
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        console.log(response, "データをチェック");
        const data = await response.json(); //必須！ jsonの形式にする必要があります🤗
        console.log(data, "中身をチェック");
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // 実行順番の確認のためコンソールログを書きましょう🤗
  // console.log("確認");

  //この下のreturnがポイントです！🤗
  return {
    name,
    email,
    data,
    handleEmailChange,
    handleNameChange,
  };

  // この下は消さない
};
