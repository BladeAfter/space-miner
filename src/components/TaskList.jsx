import TaskCard from "./TaskCard";
import { tasksData } from "../data/taskData";

export default function TaskList() {
  return (
    <section className="task-list">

      <h2 className="task-title">
        📋 SPONSORS
      </h2>

      {tasksData.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}

    </section>
  );
}