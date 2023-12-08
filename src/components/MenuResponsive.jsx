import {useState} from 'react';
import {ImMenu} from 'react-icons/im'

export default function MenuResponsive () {
	
const [menu,  setMenu] = useState(false);

 const handleClick = () => {
    setMenu(!menu);
  };
	
return(
	
<div className=" h-12 bg-purple-500 w-full fixed md:hidden">
<ImMenu size="2em" className="z-10"  onClick={handleClick} />
{menu ?
<nav className="absolute -mt-8 flex w-64 h-screen bg-orange-300">
<ul>
	 <span className="ml-60" onClick={handleClick} >X</span>
		<li>Home</li>
		<li>Profile</li>
		<li>Settings</li>
	</ul>
</nav>
        :
        <></>
      }
</div>	
	
	)
	
}