import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Navbar from "./components/Navbar";
import MenuResponsive from "./components/MenuResponsive";

const App = () => {
  return (

<div className="bg-gray-100 grid grid-cols-10 m-0 overflow-hidden">
<div className="group bg-purple-800 w-12 rounded-xl pb-64 mt-10 hover:bg-purple-800 hover:pr-24 max-md:hidden">
      < Navbar />
</div>
	  <div className="bg-gray-100 min-h-screen col-span-9 max-md:col-span-10">
	     < MenuResponsive />
	  <center>
          <TaskForm />
          <TasksList />
		  </center>
	  </div>	
	  <footer className="bg-purple-800 col-span-10 h-10 inset-x-0  bottom-0 mt-10 ">
	  <center>
	  <p>Developed by Guido Rearte</p>
	  </center>
	  </footer>
    </div>
  );
};

export default App;
