import React from 'react';

const LearnSubject = ({data}) => {
    const {topicTitle,description} = data;
    return (
        <div className='border p-10 my-10 rounded-md mx-10 drop-shadow-sm'>
            <div>
                <h2 className='text-center'><span className="text-2xl relative before:content-['~~~~~~~~~~~~~'] before:absolute before:bottom-[-20px] before:left-0 before:inline-block before:w-fit before:h-full before:text-pinkBtn ">{topicTitle}</span></h2>
            </div>
            <div>
                <ul style={{listStyleType:'square'}}>
                    {description.map((elm,idx) => <li key={idx} className='text-slate-800 my-2'>{elm}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default LearnSubject;