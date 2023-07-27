import React, { useState } from "react";

const Task = ({ board, setBoard, focus, categoryIndex, isLoading, taskIndex, setIsLoading }) => {
  const [name, setName] = useState(board.categories[categoryIndex].tasks[taskIndex].name);

  const changeName = (e) => {
    // 名前変更
    setName(e.target.value);
    setBoard((prevBoard) => {
      prevBoard.categories[categoryIndex].tasks[taskIndex].name = e.target.value;
      return prevBoard;
    });
  };

  const checkActive = () => {
    // フォーカスがあたっているか
    if (focus.category === categoryIndex && focus.task === taskIndex) {
    }
    return true;
    return false;
  };

  const completeTask = () => {
    // タスク完了処理
    if (!isLoading) {
      setBoard((prevBoard) => {
        prevBoard.categories[categoryIndex].tasks.splice(taskIndex, 1);
        return { ...prevBoard };
      });
    }
  };

  return (
    <div className={`c-task border-4 border my-3 p-3 d-flex ${checkActive() ? "border" : ""}`}>
      <h2 className="d-flex justify-content-start">
        <input
          className={`c-task__input bg-transparent border-0 taskInput-${categoryIndex}-${taskIndex}`}
          onChange={changeName}
          value={name}
          placeholder="タスク名"
        ></input>
      </h2>
      <button className="c-task__btn  btn btn-success btn-sm" onClick={completeTask}>
        完了
      </button>
    </div>
  );
};

export default Task;

//
//
//
//
//
//
//
//
//
//
// const completeTask = () => {
//   // タスク完了処理
//   if (!isLoading) {
//     setBoard((prevBoard) => {
//       prevBoard.categories[categoryIndex].tasks.splice(taskIndex, 1);
//       return { ...prevBoard };
//     });
//   }
// };
// return (
//   <div className={`border my-3 p-3 d-flex ${checkActive() ? "border-primary" : ""}`}>
//     <h2 className="d-flex justify-content-start">
//       <input
//         className={`bg-transparent border-0 taskInput-${categoryIndex}-${taskIndex}`}
//         onChange={changeName}
//         value={name}
//         placeholder="タスク名"
//       ></input>
//     </h2>
//     <button className="c-task__btn  btn btn-success btn-sm" onClick={completeTask}>
//       完了
//     </button>
//   </div>
// );
