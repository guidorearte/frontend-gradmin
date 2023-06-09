import { useCreateTaskMutation } from "../api/apiSlice";
import { useForm } from "react-hook-form";

const TaskForm = () => {
const [createTask] = useCreateTaskMutation();

const { register, formState: { errors }, handleSubmit } = useForm();
const onSubmit = (data, e) => {
	const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;
    createTask({ name, description, completed });
};

  /* const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;
    createTask({ name, description, completed });
  }; */

  return (
    <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
	
      <input className="border-solid border-2 border-blue-400 rounded mt-10" 
	  type="text" 
	  {...register("name", { required: true} )}
	  aria-invalid={errors.name ? "true" : "false"} 
	  name="name" 
	  placeholder="name..."/> <br></br>
	  {errors.name?.type === 'required' && <p className="text-red-500 bg-red-200" role="alert">name is required</p>}
	  
      <input className="border-solid border-2 border-blue-400 rounded mt-4" 
	  type="text" 
	  {...register("description", { required: true} )}
	  aria-invalid={errors.description ? "true" : "false"} 
	  name="description" 
	  placeholder="description..."/> <br></br>
	  {errors.description?.type === 'required' && <p className="text-red-500 bg-red-200" role="alert">description is required</p>}
	  
      <input type="checkbox" name="completed" /> <br></br>
	  
      <button className="text-white font-sans font-medium w-36 border-solid border-2 border-blue-700 rounded bg-blue-700" 
	  type="submit">
	  ADD TASK
	  </button>
	  
    </form>
	 
  );
};

export default TaskForm;
