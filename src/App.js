import TaskForm from "./components/TaskForm";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { useGlobalContext } from "./Context";
import { BiSolidShow } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useState } from "react";
import Menu from "./components/Menu";


function App() {
  const {showBoard,sidebarShow,setSidebarShow,addTask,setAddTask,darkMode} = useGlobalContext();
  const [showMenu,setShowMenu] = useState(false);
 
  return (
    <div className={` flex flex-col transition-all ${darkMode && 'bg-[rgb(43,44,55)]'}`}>
      <nav className={`flex justify-between transition-all  p-[10px] ${darkMode && 'text-white bg-[rgb(43,44,55)]'}`}>
        <div className="flex gap-[100px] items-center">
          <div className="flex items-center gap-[10px]">
              <GrTask size={30} className="text-[rgb(99,95,199)]"/>
              <h1 className="text-[30px] font-bold">Kanban</h1>
              {
               !showMenu ? <MdOutlineKeyboardDoubleArrowDown onClick={()=>setShowMenu(true)} size={25} className="arrow text-[rgb(99,95,199)] hidden cursor-pointer"/> : <MdOutlineKeyboardDoubleArrowUp onClick={()=>setShowMenu(false)} size={25} className="arrow text-[rgb(99,95,199)] hidden cursor-pointer"/>
              }
          </div>
          <h1 className="showBoard text-[25px] font-bold">{showBoard}</h1>
        </div>
        <button onClick={()=> setAddTask(true)} className="bg-[rgb(99,95,199)] text-white font-medium py-[5px] px-[16px] rounded-[100px]">+ Add New Task</button>
      </nav>
      <div className='flex relative'>
        <SideBar/>
        <Main/>
        <button onClick={()=> setSidebarShow(false)} className={`${!sidebarShow && 'hidden'}  w-[70px] border transition-all absolute top-[90%] bg-[rgb(99,95,199)] rounded-[100px] rounded-l-lg  py-[5px] px-[10px]`}><BiSolidShow className="text-white ml-[20px]" size={25}/></button>
      </div>
        {
          addTask && <TaskForm/>
        }
        {
          showMenu && <Menu setShowMenu={setShowMenu}/>
        }
    </div>
  );
}

export default App;
