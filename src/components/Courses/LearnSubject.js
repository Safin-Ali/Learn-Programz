import React, { useContext } from 'react';
import { ThemeUI } from '../darkTheme/DarkTheme';

const LearnSubject = ({data}) => {
    const {topicTitle,description} = data;
    const {themeUI} = useContext(ThemeUI);
    return (
        <div className='border p-10 my-10 rounded-md mx-10 drop-shadow-sm'>
            <div>
                <h2 className={`text-center ${!themeUI ? 'text-slate-800' : 'text-slate-300'}`}><span className={`text-2xl relative before:content-['~~~~~~~~~~~~~'] before:absolute before:bottom-[-20px] before:left-0 before:inline-block before:w-fit before:h-full before:text-pinkBtn 1`}>{topicTitle}</span></h2>
            </div>
            <div>
                <ul style={{listStyleType:'square'}}>
                    {description.map((elm,idx) => <li key={idx} className={`my-2 ${!themeUI ? 'text-slate-800' : 'text-slate-200'}`}>{elm}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default LearnSubject;