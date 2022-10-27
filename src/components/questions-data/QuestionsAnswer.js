import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import {BiCodeAlt} from 'react-icons/bi';
import { Link} from 'react-router-dom';
import LoadingAnim from '../loading-anim/LoadingAnim';
import { ThemeUI } from '../darkTheme/DarkTheme';


function QuesAnsCard ({data}) {
    const {QuestionName,Answer,Answer2} = data;

    const {themeUI} = useContext(ThemeUI);

        return(
            <div className={`shadow-lg border mx-[10%] my-5 py-10 text-center`}>
                <h2 className={`capitalize px-[10%] py-[2%] text-lg font-bold lg:font-normal lg:text-4xl ${!themeUI ? 'text-slate-900' : 'text-slate-200'}`}>{QuestionName}</h2>
                <p className={`px-[10%] ${!themeUI ? 'text-slate-900' : 'text-slate-200'} py-[2%]`}>{Answer}</p>
                {Answer2 && <p className={`px-[10%] ${!themeUI ? 'text-slate-900' : 'text-slate-200'} py-[2%]`}>{Answer2}</p>}
            </div>
        )
}

const QuestionsAnswer = () => {
    const questionsData = useLoaderData();
    const {themeUI} = useContext(ThemeUI);
    if(!questionsData){
        return <div className='flex justify-center items-center min-h-screen'>
        <LoadingAnim></LoadingAnim>
    </div>
    }
    else{
        return (
            <>
            <Link to={'/home'} className={`text-3xl text-center block ${!themeUI ? 'text-slate-800' : 'text-slate-200'} py-[4%]`}>Learn<BiCodeAlt className='inline text-pinkBtn text-4xl'></BiCodeAlt>Programz</Link>
                {
                    questionsData.map(elm => <QuesAnsCard key={elm.id} data={elm}></QuesAnsCard>)
                }
            </>
        )
    }
};

export default QuestionsAnswer;