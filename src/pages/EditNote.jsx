import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";

const EditNote = ({ id,onClose, noteData, updateNote }) => {
    const [title, setTitle] = useState(noteData.title);
    const [tagline, setTagline] = useState(noteData.tagline);
    const [messageBody, setMessageBody] = useState(noteData.messageBody);

    const handleSubmit = () => {
        const updatedNote = {
            id,
            title,
            tagline,
            messageBody
        };
        updateNote(updatedNote); 
        onClose(); 
    };

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 z-50">
            <div className="p-5 bg-white rounded-lg w-full lg:max-w-md max-w-xs relative">
                <button className="text-3xl absolute right-4" onClick={onClose}><MdCancel /></button>
                <h2 className='text-lg font-semibold mb-4'>Edit Note</h2>
                <input
                    type="text"
                    placeholder="Title..."
                    autoComplete='off'
                    className='w-full outline-none px-3 py-2 mb-3'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Tagline..."
                    className='w-full outline-none px-3 py-2 mb-3'
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                />
                <textarea
                    rows="5"
                    placeholder='Write a note...'
                    className='resize-none w-full outline-none px-3 py-2 mb-3'
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                ></textarea>
                <div className="flex justify-start">
                    <button className="bg-primary-color hover:bg-[#c48942] text-white px-4 py-2 rounded-md mr-2" onClick={handleSubmit}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default EditNote;
