// props 구조분해 할당으로 가져온다(파라미터 자리)

export default function Lists({ todoData, setTodoData }) {
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    setTodoData(todoData.filter((data) => data.id !== id));
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  };

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
    backgroundColor: "#ff0000",
  };

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id} style={getStyle(data.completed)}>
          <input
            type="checkbox"
            checked={data.completed}
            onChange={() => handleCompleteChange(data.id)}
          />
          {data.title}
          <button
            style={btnStyle}
            onClick={() => {
              handleClick(data.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
