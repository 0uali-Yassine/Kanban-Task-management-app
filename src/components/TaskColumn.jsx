import React from 'react'
import { useGlobalContext } from '../Context';
import TaskCard from './TaskCard';
import DropArea from './DropArea';

function TaskColumn({state}) {

  const {taskBoard1,taskBoard2,taskBoard3,showBoard,
    isActive,setTaskBoard1,setTaskBoard2,setTaskBoard3} = useGlobalContext();

  let allTask = taskBoard1;

  if(showBoard === 'Platform Launch'){
    allTask = taskBoard1;
  }else if(showBoard === 'Marketing Plan'){
    allTask = taskBoard2;
  }else{
    allTask = taskBoard3;
  }

  
  const onDrop = (status,position) =>{
    if(isActive === null || isActive === undefined) return;
    const taskToMove = allTask[isActive];
    const upDateTasks = allTask.filter((task,index) => index !== isActive);

      upDateTasks.splice(position,0,{
        ...taskToMove,
        status,
        isDone:status === 'Done'? true:false,
      })

      // update the current array board
      if(showBoard ==='Platform Launch'){
        setTaskBoard1(upDateTasks);
      }else if(showBoard === 'Marketing Plan'){
        setTaskBoard2(upDateTasks);
      }else{
        setTaskBoard3(upDateTasks);
      }
    }
    
    // update the number of tasks on specific Status
    let nbTask =0;
    let color = '';
    switch (state) {
      case 'Todo':
        nbTask = 0;
        color='bg-orange-400';
        allTask?.map(task => {
          if(task.status === state){
            nbTask++;
          }
          return task;
        })
        break;

      case 'Doing':
        nbTask = 0;
        color='bg-green-400';

        allTask?.map(task => {
          if(task.status === state){
            nbTask++;
          }
          return task;

        })
        break;

      case 'Done':
          nbTask = 0;
         color='bg-[rgb(99,95,199)]';

          allTask?.map(task => {
            if(task.status === state){
              nbTask++;
            }
          return task;
          })
          break;
      default:
        break;
     }


  return (
    <div className='w-[200px]  h-auto p-[20px] flex flex-col gap-[5px]' key={state}>
        <h1 className='text-gray-500 font-medium flex items-center gap-[5px]'><div className={`w-[15px] ${color} h-[15px] rounded-[50%]`}></div>{state} ({nbTask})</h1>
        <DropArea onDrop={()=> onDrop(state,0)}/>
        {
            allTask?.map((task,index)=>{
                const {status} = task;
                if(status === state){
                    return <React.Fragment>
                            <TaskCard key={index} {...task} index={index}/>
                            <DropArea onDrop={()=> onDrop(status,index+1)}/>
                          </React.Fragment>
                }
            })
        }
    </div>
  )
}

export default TaskColumn;