import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;
    React.useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

  return <div className='relative pb-8'>
    <button 
    className={`cursor-pointer transition-all duration-100 transform hover:scale-110 absolute ${theme === "dark" ? "opcaity-0" : "opacity-100"}`}
    onClick = {()=> setTheme(theme === 'light' ? "dark" : "light")}
    >
        <MdDarkMode 
        className='size-8'
        />
    </button>

    <button className=' cursor-pointer transition-all duration-100 transform hover:scale-110 absolute'
    onClick = {()=> setTheme(theme === 'light' ? "dark" : "light")}
    >
        <MdOutlineDarkMode 
        className='size-8'
        />
    </button>
  </div>
}

export default DarkMode