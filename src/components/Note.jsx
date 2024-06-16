import React from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { RiPushpinLine, RiPushpinFill } from "react-icons/ri";

const Note = ({ id, noteData, deleteData, togglePin,openEdit }) => {
  const deleteNote = () => {
    deleteData(id);
  };

  const handlePinClick = () => {
    togglePin(id);
  };
const openEditNote = ()=>{
  openEdit(id)
}
  return (
    <div className={`mt-10 bg-white w-[300px] rounded-lg break-words px-4 py-8 relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${noteData.pinned ? 'border-yellow-500' : ''}`}>
      <div onClick={handlePinClick} className="cursor-pointer absolute right-4 top-4 text-2xl">{noteData.pinned ? <RiPushpinFill /> : <RiPushpinLine />}</div>
     <div className='cursor-pointer' onClick={openEditNote}>
     <h1 className='font-bold text-xl leading-5 mb-1'>{noteData.title}</h1>
      <p className=' leading-3 text-[#6f6f6f] mb-3'>{noteData.tagline}</p>
      <p>{noteData.messageBody}</p>
     </div>
      <div className='text-2xl absolute right-4 cursor-pointer bottom-3 text-[#d91a1a] hover:text-[#f70202]' onClick={deleteNote}>
        <IoTrashBin />
      </div>
     
    </div>
  );
};

export default Note;
