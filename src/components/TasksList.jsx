import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../api/apiSlice";
import toast, { Toaster } from 'react-hot-toast';
import {useState} from 'react' 

const TasksList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  
  const [sortState, setSortState] = useState("none");
  
const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.name > b.name ? 1 : -1) },
    descending: { method: (a, b) => (a.name > b.name ? -1 : 1) },
  };
  

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

const notify = () => toast.success('Deleted !');


  return (

<div>

<select className="mt-10" defaultValue={'DEFAULT'} 
    
     onChange={(e) => 
     setSortState(e.target.value)}
     >
        <option value="DEFAULT" disabled>None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
</select>
	  
      {[...tasks].sort(sortMethods[sortState].method).map((task) => (
	    <div className="bg-white border-solid border-2 border-grey  rounded-2xl mt-10 w-96 py-4 max-lg:w-screen" >
		<ul>
        <li key={task._id} >
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        
<Toaster
	  position="bottom-right"
      reverseOrder={true}
	  />
          <input
		  className="mt-4"
            type="checkbox"
            id={task._id}
            checked={task.completed}
            onChange={(e) => {
              updateTask({ ...task, completed: e.target.checked });
            }}
          />
		    
          <label htmlFor={task._id}>Completed</label>
        </li>
		</ul>
		<button
		 className="mt-8 text-white font-sans font-medium w-36 border-solid border-2 border-red-700 rounded bg-red-700" 
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            DELETE
          </button>
		</div>
      ))}

	</div>
  );
};

export default TasksList;










