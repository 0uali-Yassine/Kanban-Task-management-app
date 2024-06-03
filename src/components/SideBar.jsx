import React from 'react'
import { useGlobalContext } from '../Context';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";

function SideBar() {
    const {setShowBoard,setSidebarShow,sidebarShow,showBoard,darkMode, setDarkMode} = useGlobalContext();

    const showBOARD =(e)=>{
        setShowBoard(e.target.name);
    }

  return (
    <div className={`sidebar overflow-hidden p-[10px] transition-all relative h-[540px] flex flex-col gap-[10px]  ${sidebarShow ? 'w-[0px] p-[0px]':'w-[300px]'} ${!darkMode ? 'bg-white':  ' bg-[rgb(43,44,55)'}`}>
        <h1 className='text-gray-500 text-[17px] font-medium'>ALL BOARDS (3)</h1>
        <button onClick={showBOARD} name='Platform Launch' className={`text-left px-[10px] w-[90%] h-[50px] mr-[10px] transition-all hover:bg-[rgba(99,95,199,0.165)] rounded-[100px] rounded-l-lg  font-medium text-[19px] ${showBoard === 'Platform Launch' && 'text-white bg-[rgb(99,95,199)]'} ${darkMode ?'text-white' : 'text-black'}`}>Platform Launch</button>
        <button onClick={showBOARD} name='Marketing Plan' className={`text-left px-[10px] w-[90%] h-[50px] rounded-[100px] rounded-l-lg transition-all hover:bg-[rgba(99,95,199,0.165)] font-medium text-[19px] ${showBoard=== 'Marketing Plan' && 'text-white bg-[rgb(99,95,199)]'} ${darkMode ? 'text-white' : 'text-black'}`}>Marketing Plan</button>
        <button onClick={showBOARD} name='Roadmap' className={`text-left px-[10px] w-[90%] h-[50px] rounded-[100px] rounded-l-lg transition-all hover:bg-[rgba(99,95,199,0.165)] font-medium text-[19px] ${showBoard=== 'Roadmap' && 'text-white bg-[rgb(99,95,199)]'} ${darkMode ? 'text-white' : 'text-black'}`}>Roadmap</button>
        
        <div className=' absolute bottom-[2px] flex flex-col gap-[10px] items-center'>
          <div className='flex items-center ml-[10px]'>
            <MdLightMode size={25} className={`${!darkMode ? 'text-gray-500' :'text-gray-300'}`}/>
            <div className={`flex items-center  w-[50px] h-[20px]  rounded-[100px] ${darkMode ? 'bg-[rgb(99,95,199)]':'bg-gray-400'}`}>
              <div className={`h-[22px] w-[22px] rounded-[50%] transition-all bg-gray-100 ${darkMode ? 'translate-x-7 bg-gray-300':'translate-x-0'}`} onClick={()=>  setDarkMode(prev => !prev)}></div>
            </div>
            <MdDarkMode size={25}  className={`${darkMode ? 'text-gray-500' :'text-gray-300'}`}/>
          </div>

          <button onClick={()=> setSidebarShow(true)} className='btn-hide flex gap-[10px] items-center  rounded-[100px] rounded-l-lg  py-[5px] px-[10px]'>
            <BiSolidHide size={25} className='text-gray-400'/>
            <p className='text-[19px] font-medium text-gray-400'>Hide Sidebar</p>
          </button>
        </div>
    </div>
  )
}

export default SideBar;