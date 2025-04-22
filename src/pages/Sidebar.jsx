import React, {useState,useEffect} from 'react'
// import User from '../pages/User';
// import Settings from '../pages/Settings';
// import Form from './Form/Form';
import '../style/Sidebar.scss'
import { Home,User,Settings,BadgeIndianRupee,ClipboardList,LogOut,Sun,Moon} from "lucide-react"
import App from './../App';
const Sidebar = () => {

const [theme, setTheme] = useState("dark");
useEffect(()=>{
    document.body.setAttribute('data-theme', theme);
},[theme])

const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark'? 'light' : 'dark'));
}

const navItems = [
    {name : 'Home', icon: <Home />, path: '/'},
    {name : 'Profile', icon: <User/>, path: '/profile'},
    {name : 'Settings', icon: <Settings />, path: '/settings'},
    {name : 'Add Expense', icon: <BadgeIndianRupee />,path: '/form/create'},
    {name : 'Expense list', icon: <ClipboardList />,path: '/expenselist'},
]
  return (
    <div className='sidebar'>
        <div className='sidebar_header'>

        </div>
        <nav className='sidebar_nav'>
            {navItems.map((item) => (
                <a href={item.path} key={item.name} className='sidebar_link'>
                    {item.icon}
<span>{item.name}</span>
                </a>

            ))}
        </nav>
      



      <div className='sidebar_footer'>
        <button className='sidebar_link' onClick={toggleTheme}>
        {theme === 'dark' ? <Sun/> : <Moon/>}
<span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
<button className='sidebar_link'>
<LogOut/>
<span>LogOut</span>
</button>
      </div>
    </div>
  )
}

export default Sidebar
