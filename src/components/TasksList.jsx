import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../api/apiSlice";
import toast, { Toaster } from 'react-hot-toast';

const TasksList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

const notify = () => toast.success('Deleted !');

  return (
 <div>
    <ul>
      {tasks.map((task) => (
	  <div className="bg-white border-solid border-2 border-grey  rounded-2xl mt-10 w-96 pt-4 pb-4" key={task.id} >
        <li>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
		  <input
            type="checkbox"
            id={task.id}
            checked={task.completed}
            onChange={(e) => {
              updateTask({ ...task, completed: e.target.checked });
            }}
          />
          <label htmlFor={task.id}>Completed</label> <br></br>
          <button
		  className="w-36 bg-red-500 text-white font-sans font-medium border-solid border-2 border-red-500 rounded"
            onClick={() => {
              deleteTask(task.id);
			  notify();
            }}
          >
            DELETE
          </button>
		  	<Toaster
	  position="bottom-right"
      reverseOrder={true}
	  />
        </li>
	
		 </div>
		
      ))}
	  
    </ul>
	</div>
	
  );
};

export default TasksList;
