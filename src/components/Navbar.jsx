import {HiHome} from 'react-icons/hi'
import	{CiUser} from 'react-icons/ci'
import {IoMdOptions} from 'react-icons/io'

export default function Navbar () {
	
return (
 <nav>
 <ul>
      <li  className="mb-10"><a  href="#"><HiHome  size="2.5em"/><p className="opacity-0 group-hover:opacity-100">Home</p></a></li>
      <li className="mb-10"><a href="#"><CiUser size="2.5em" /><p className="opacity-0 group-hover:opacity-100">Profile</p></a></li>
      <li className="mb-10"><a href="#"><IoMdOptions size="2.5em" /><p className="opacity-0 group-hover:opacity-100">Settings</p></a></li>
	  
	 </ul>
</nav>
      )
}