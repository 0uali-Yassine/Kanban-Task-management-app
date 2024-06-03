import { useGlobalContext } from "../Context";

function TaskCard({taskname,index,id,isDone}) {
    const {setisActive,darkMode,deleteTsk,completeTask}  = useGlobalContext();
   
  return (
    <div className={`card w-[200px] h-auto shadow-xl shadow-[rgb(99,95,199)]/50 p-[10px] bg-white rounded-md flex flex-col justify-between gap-[5px] cursor-grab ${darkMode && 'bg-[rgb(43,44,55)] text-white'}`} draggable onDragStart={()=> setisActive(index)} onDragEnd={()=> setisActive(null)}>
      <h1 className={`font-medium text-[18px]  ${darkMode && 'text-black'} ${isDone ? 'line-through' : null}`}>{taskname}</h1>
      <div className="flex justify-evenly">
        <button onClick={()=> deleteTsk(id)} className=" border-[1px] border-red-500 hover:bg-red-500 bg-red-300 px-[10px] rounded-md font-medium text-[12px]">Delete</button>
        <button onClick={()=> completeTask(id)}  className=" border-[1px] border-green-400 hover:bg-green-400 bg-green-300 px-[10px] rounded-md font-medium text-[12px]">Done</button>
      </div>
    </div>
  )
}

export default TaskCard;