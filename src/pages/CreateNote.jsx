import React, { useState } from 'react';

const CreateNote = ({ passNote }) => {
    const [title, setTitle] = useState('');
    const [tagline, setTagline] = useState('');
    const [messageBody, setMessageBody] = useState('');
    const [expand, setExpand] = useState(false)

    const handleSubmit = () => {
        if (!title && !tagline && !messageBody) {
            return;
        }
        const note = {
            title,
            tagline,
            messageBody
        }
        passNote({ note })
        setTitle('')
        setTagline('')
        setMessageBody('')
        setExpand(false)
    };

    return (
        <div className="mt-3 flex justify-center items-center lg:pt-0 pt-10" >
            <div className="bg-white p-5 rounded lg:w-[450px] w-[310px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <input
                    type="text"
                    placeholder="Title..."
                    autoComplete='off'
                    className='w-full outline-none px-2 py-1 mb-2'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onClick={() => setExpand(true)}
                />
                {
                    expand ? <div>
                        <input
                            type="text"
                            placeholder="tagline..."
                            className='w-full outline-none px-2 py-1 mb-2'
                            value={tagline}
                            onChange={(e) => setTagline(e.target.value)}
                        />
                        <div className=''>
                            <textarea name="" id="" rows="5"
                                placeholder='Write a note...'
                                className=' resize-none w-full outline-none px-2 py-1'
                                value={messageBody}
                                onChange={(e) => setMessageBody(e.target.value)}>

                            </textarea>
                        </div>
                    </div> : null
                }
                <button className='bg-primary-color px-5 py-2 rounded-lg text-white'
                    onClick={handleSubmit}>Submit
                </button>
            </div>
        </div>
    );
};



export default CreateNote



