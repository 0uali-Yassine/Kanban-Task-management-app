import React, { useState } from 'react';
import { useGlobalContext } from '../Context';

function DropArea({onDrop}) {
    const [showDrop, setShowDrop] = useState(false);
    const {darkMode} = useGlobalContext();

   
  return (
    <div className={`border w-[200px] h-[100px] transition-all border-dashed p-[10px] border-gray-500 ${darkMode && 'text-white'} ${showDrop ? 'block': 'h-[5px] opacity-0' }`}
        onDragEnter={()=> setShowDrop(true)}
        onDragLeave={()=>  setShowDrop(false)}
        onDragOver={e => e.preventDefault()}
        onDrop={()=>{
            onDrop();
           setShowDrop(false);
        }} 
    >
        DropArea
    </div>
  )
}

export default DropArea;