import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { APIData } from '../../data/DataFetch';


function TopicsListCard ({data}) {
    const {logo,name,seo,seoImage,realese,summary} = data;
    return(
        <div className='border rounded-md drop-shadow-sm py-3'>
            <div className='mx-auto my-3 rounded-lg w-1/2 shadow-md'>
                <img src={logo} className='p-1 min-h-[199px]' alt="Language Thumb" />
            </div>
            <div className='flex justify-center border m-20 rounded-lg my-5 items-center'>
                <p className='text-center mx-3'>Realsed: <strong className='text-zinc-600'>{realese}</strong></p>
                <div className='w-14 mx-3 rounded-full my-2 shadow-lg'>
                    <img className='rounded-full p-0.5' src={seoImage} alt="Founder" />
                </div>
            </div>
                <p className='italic text-center font-medium'>CEO: <strong className='text-slate-600'>{seo}</strong></p>
            <div>
                <p className='font-medium px-5 text-center text-gray-900 my-3'>{summary.slice(0,150)+'...'}</p>
            </div>
            <div className='text-center'><Link to={`/category/${name.toLowerCase()}`} className='bg-pinkBtn py-1 px-2 rounded my-1 text-white hover:bg-pink-600 duration-150'>Start {name}</Link></div>
        </div>
    )
}

const TopicsList = () => {
    const apiData = useContext(APIData)
    return (
        <section className='my-10 container mx-auto'>
            <div className='grid gap-10 justify-center grid-cols-3'>
                {
                    apiData?.map(element => <TopicsListCard key={element.id} data={element}></  TopicsListCard>)
                }
            </div>
        </section>
    );
};

export default TopicsList;