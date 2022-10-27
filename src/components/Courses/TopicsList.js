import React, { createRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { APIData } from '../../data/DataFetch';
import Pdf from "react-to-pdf";
import { ThemeUI } from '../darkTheme/DarkTheme';


function TopicsListCard ({data}) {
    const {logo,name,seo,seoImage,realese,summary} = data;
    
    const pdf = createRef();

    const {themeUI} = useContext(ThemeUI);
    
    return(
        <div ref={pdf} className={`border relative rounded-md drop-shadow-sm py-3`}>
            <div className='mx-auto my-3 rounded-lg w-1/2 shadow-md'>
                <img src={logo} className='p-1 lg:min-h-[199px]' alt="Language Thumb" />
            </div>
            <div className='flex flex-col-reverse lg:flex-row justify-center border m-20 rounded-lg my-5 items-center'>
                <p className='text-center mx-3'>Realsed: <strong className={`${!themeUI ? 'text-zinc-600' : 'text-zinc-200'}`}>{realese}</strong></p>
                <div className='w-14 mx-3 rounded-full my-2 shadow-lg'>
                    <img className='rounded-full p-0.5' src={seoImage} alt="Founder" />
                </div>
            </div>
            <p className='italic text-center font-medium'>CEO: <strong className={`${!themeUI ? 'text-slate-600' : 'text-slate-200'}`}>{seo}</strong></p>
            <div>
                <p className={`font-medium px-5 text-center ${!themeUI ? 'text-gray-900' : 'text-slate-200'} my-3`}>{summary.slice(0,150)+'...'}</p>
            </div>
            <div className='flex justify-around items-center'>
                <div className='text-center'><Link to={`/category/${name.toLowerCase()}`}   className='bg-pinkBtn py-1 px-2 rounded my-1 text-white hover:bg-pink-600     duration-150'>Start {name}</Link></div>
                <Pdf  targetRef={pdf} filename={`${name}-offline.pdf`}>
                    {({ toPdf }) => <button className='bg-pinkBtn py-1 px-2 rounded my-1 text-white hover:bg-pink-600 duration-150' onClick={toPdf}>Download</button>}
                </Pdf>
            </div>   
            <span className=' bg-pinkBtn absolute -right-2 -top-2 w-5 h-5 rounded-md text-center text-slate-50'>{data?.data.length}</span>  
        </div>
    )
}

const TopicsList = () => {

    const {themeUI} = useContext(ThemeUI);
    const apiData = useContext(APIData)
    return (
        <section className={`my-10 ${!themeUI ? 'text-gray-900' : 'text-slate-200'} container mx-auto`}>
            <div className='grid gap-10 justify-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6'>
                {
                    apiData?.map(element => <TopicsListCard key={element.id} data={element}></  TopicsListCard>)
                }
            </div>
        </section>
    );
};

export default TopicsList;