import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {BiCodeAlt} from 'react-icons/bi';
import { Link} from 'react-router-dom';
import LoadingAnim from '../loading-anim/LoadingAnim';


function QuesAnsCard ({data}) {
    const {QuestionName,Answer,Answer2} = data;
        return(
            <div className='shadow-lg border mx-[10%] my-10 text-center'>
                <h2 className='capitalize px-[10%] py-[2%] text-lg font-bold lg:font-normal lg:text-4xl text-slate-900'>{QuestionName}</h2>
                <p className='px-[10%] py-[2%]'>{Answer}</p>
                {Answer2 && <p className='px-[10%] py-[2%]'>{Answer2}</p>}
            </div>
        )
}

const QuestionsAnswer = () => {
    const questionsData = useLoaderData();
    console.log(questionsData)
    if(!questionsData){
        return <div className='flex justify-center items-center min-h-screen'>
        <LoadingAnim></LoadingAnim>
    </div>
    }
    else{
        return (
            <>
            <Link to={'/home'} className='text-3xl text-center block text-slate-800 py-[4%]'>Learn<BiCodeAlt className='inline text-pinkBtn text-4xl'></BiCodeAlt>Programz</Link>
                {
                    questionsData.map(elm => <QuesAnsCard key={elm.id} data={elm}></QuesAnsCard>)
                }
            </>
        )
    }
};

export default QuestionsAnswer;