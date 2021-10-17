import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  console.log(`Tasks: ${tasks}`);
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
