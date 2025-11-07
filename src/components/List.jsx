export default function List({ title, id, completed, todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
    backgroundColor: "#ff0000",
  };

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

  return (
    <div style={getStyle(completed)}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCompleteChange(id)}
      />
      {title}
      <button
        style={btnStyle}
        onClick={() => {
          handleClick(id);
        }}
      >
        X
      </button>
    </div>
  );
}
