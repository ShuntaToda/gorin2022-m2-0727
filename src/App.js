import "./App.css";
import Board from "./components/Board";

function App() {
  const taskBackgroundGreen = () => {
    const tasks = document.querySelectorAll(".c-task");
    console.log(tasks);

    tasks.forEach((task) => {
      task.style.background = "rgb(173, 230, 173)";
    });
  };
  const headerRed = () => {
    const tasks = document.querySelectorAll(".c-board__header");
    console.log(tasks);

    tasks.forEach((task) => {
      task.style.background = "red";
    });
  };
  const headerLightBlue = () => {
    const tasks = document.querySelectorAll(".c-board__header");
    console.log(tasks);

    tasks.forEach((task) => {
      task.style.background = "lightBlue";
    });
  };
  const taskOrange = () => {
    const tasks = document.querySelectorAll(".c-task__input");
    // console.log(tasks);

    tasks.forEach((task) => {
      task.style.color = "orange";
      task.style.fontSize = "3rem";
    });
  };
  return (
    <div className="App">
      <Board></Board>
      <div className="mt-4 text-center">
        <button className="btn btn-outline-primary mx-2" onClick={headerRed}>
          header-red
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={headerLightBlue}>
          header-lightBlue
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={taskBackgroundGreen}>
          task-background-green
        </button>
        <button className="btn btn-outline-primary mx-2" onClick={taskOrange}>
          task-orange
        </button>
      </div>
    </div>
  );
}

export default App;
