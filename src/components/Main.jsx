import React from 'react'
import TaskColumn from './TaskColumn';
import { useGlobalContext } from '../Context';

function Main() {
    const {showBoard} = useGlobalContext();
    
    switch (showBoard) {
        case 'Platform Launch':
            return  <div className="flex p-[10px] bg-[rgba(150,148,226,0.164)] justify-evenly w-[100%]  h-[500px] overflow-auto gap-[10px]">
                        <TaskColumn state='Todo'/>
                        <TaskColumn state='Doing'/>
                        <TaskColumn state='Done'/>
                    </div>
            case 'Marketing Plan':
                return  <div className="flex p-[10px] bg-[rgba(150,148,226,0.164)]  justify-evenly w-[100%]  h-[500px] overflow-auto gap-[10px]">
                            <TaskColumn state='Todo'/>
                            <TaskColumn state='Doing'/>
                            <TaskColumn state='Done'/>
                        </div>
        default:
                return  <div className="flex  p-[10px] bg-[rgba(150,148,226,0.164)] justify-evenly w-[100%] h-[500px] overflow-auto gap-[10px]">
                            <TaskColumn state='Todo'/>
                            <TaskColumn state='Doing'/>
                            <TaskColumn state='Done'/>
                        </div>
    }
  return (
    <main className="flex h-[500px] overflow-auto gap-[10px]">
          <TaskColumn state='todo'/>
          <TaskColumn state='doing'/>
          <TaskColumn state='done'/>
    </main>
  )
}

export default Main;