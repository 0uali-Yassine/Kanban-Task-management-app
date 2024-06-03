import React, { createContext, useContext,useState } from 'react';
const myContext = createContext();

function Context({children}) {
    const [taskBoard1, setTaskBoard1] = useState([]);
    const [taskBoard2, setTaskBoard2] = useState([]);
    const [taskBoard3, setTaskBoard3] = useState([]);
    const [addTask, setAddTask] = useState(false);
    const [isActive, setisActive] = useState(null);
    const [sidebarShow, setSidebarShow] = useState(false);
    const [showBoard,setShowBoard] = useState('Platform Launch');
    const [darkMode,setDarkMode] = useState(false);

    const onSubmitForm = e =>{
        e.preventDefault();
        const dataForm = new FormData(e.target);
        const {taskname,status} = Object.fromEntries(dataForm); 
        if(!taskname){
          alert('Add New Task!');
        }else{
          setAddTask(false);
          switch (showBoard) {
            case 'Platform Launch':
                setTaskBoard1(prev => [...prev,{taskname,status,originalStatus: status,id:new Date().getTime(),isDone:status === 'Done' ? true : false}])
              break;
  
            case 'Marketing Plan':
                setTaskBoard2(prev => [...prev,{taskname,status,originalStatus: status,id:new Date().getTime(),isDone:status === 'Done' ? true : false}])
              break;
              
              case 'Roadmap':
                setTaskBoard3(prev => [...prev,{taskname,status,originalStatus: status,id:new Date().getTime(),isDone:status === 'Done' ? true : false}])
              break;
          }
        }
    }

    const deleteTsk =(id)=>{
      switch (showBoard) {
        case 'Platform Launch':
            setTaskBoard1(prev => prev.filter(tsk => tsk.id !== id));
          break;

        case 'Marketing Plan':
            setTaskBoard2(prev => prev.filter(tsk => tsk.id !== id))
          break;
          
        default:
          setTaskBoard3(prev => prev.filter(tsk => tsk.id !== id))
          break;
      }  
    }

    const completeTask = (id)=>{

      switch (showBoard) {
        case 'Platform Launch':
            setTaskBoard1(prev => prev.map(task =>{
              if(task.id === id){
                return {...task,status:!task.isDone ? 'Done' : task.originalStatus,isDone:!task.isDone};
              }
            return task;

            }));

        case 'Marketing Plan':
          setTaskBoard2(prev => prev.map(task =>{
            if(task.id === id){
              return {...task,status:!task.isDone ? 'Done' : task.originalStatus,isDone:!task.isDone};
            }
            return task;
          }));
          
        default:
          setTaskBoard3(prev => prev.map(task =>{
            if(task.id === id){
              return {...task,status:!task.isDone ? 'Done' : task.originalStatus,isDone:!task.isDone};
            }
            return task;

          }));
      }  
    }
    
  return (
    <myContext.Provider value={{onSubmitForm,taskBoard1,taskBoard2,taskBoard3,setTaskBoard1,setisActive,isActive
      ,setShowBoard,showBoard,setTaskBoard2,setTaskBoard3,setSidebarShow,sidebarShow,setAddTask,addTask,
      setDarkMode,darkMode,deleteTsk,completeTask
    }}>
        {children}
    </myContext.Provider>
  )
}


export const useGlobalContext = ()=>{
    return useContext(myContext);
}
export default Context;