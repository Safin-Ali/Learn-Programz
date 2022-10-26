import React from 'react';

const LearnSubject = ({data}) => {
    const {topicTitle,description} = data;
    return (
        <div className='border p-10 my-10 rounded-md mx-10 drop-shadow-sm'>
            <div>
                <h2 className='text-center text-2xl'>{topicTitle}</h2>
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