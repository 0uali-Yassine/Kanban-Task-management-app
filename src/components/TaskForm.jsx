import { useGlobalContext } from '../Context';

function TaskForm() {
  const {onSubmitForm,setAddTask} = useGlobalContext();
  
  const hideForm = (e) => {
    // Check if the target is the parent div
    if (e.target === e.currentTarget) {
      setAddTask(false);
    }
  };
  return (
    <div onClick={hideForm} className='absolute z-10 flex justify-center  w-[100%] h-[100%] bg-[#2020204b]'>
      <div className='flex flex-col gap-[10px]  bg-white p-[19px] m-auto  border border-black'>
        <h1 className='text-center text-[18px] font-bold'>Add New Task</h1>

        <form onSubmit={onSubmitForm} className='flex flex-col gap-[10px]'>
          <div className='flex flex-col gap-[5px]'>
            <label htmlFor="taskname" className='text-gray-500 font-medium'>Task Name</label>
            <input id='taskname' name='taskname' type="text" placeholder='e.g Take Coffe Break' className='border rounded-md border-[rgb(99,95,199)] p-[5px] outline-none'/>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label htmlFor="status" className='text-gray-500 font-medium'>Current Status</label>
            <select id='status' name="status" className='outline-none rounded-md border border-[rgb(99,95,199)] p-[5px]  '>
              <option value="Todo">Todo List</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <button className='bg-[rgb(99,95,199)] rounded-md text-white font-medium p-[4px]'>Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default TaskForm;