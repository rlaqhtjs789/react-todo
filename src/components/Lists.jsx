// props 구조분해 할당으로 가져온다(파라미터 자리)

import List from "./List";

export default function Lists({ todoData, setTodoData }) {
  return (
    <div>
      {todoData.map((data) => (
        <List
          key={data.id}
          title={data.title}
          id={data.id}
          completed={data.completed}
          todoData={todoData}
          setTodoData={setTodoData}
        />
      ))}
    </div>
  );
}
