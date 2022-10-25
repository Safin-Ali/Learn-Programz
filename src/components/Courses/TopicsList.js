import React, { useContext } from 'react';
import { APIData } from '../../data/DataFetch';


function TopicsListCard ({data}) {
    const {logo,name,seo,seoImage,realese,summary} = data;
    console.log(data)
    return(
        <div className='border rounded-md drop-shadow-sm w-3/4 py-3'>
            <div className='mx-auto my-3 rounded-lg w-1/2 shadow-md'>
                <img src={logo} className='p-1 ' alt="Language Thumb" />
            </div>
            <div className='flex justify-evenly items-center'>
                <p className='text-center'>Realsed: <strong>{realese}</strong></p>
                <div className='w-14 rounded-full my-2 shadow-lg'>
                    <img className='rounded-full p-0.5' src={seoImage} alt="Founder" />
                </div>
            </div>
                <p className='italic text-center'>CEO: <strong>{seo}</strong></p>
            <div>
                <p className='font-medium px-5 text-gray-900 my-2'>{summary.slice(0,200)+'...'}</p>
            </div>
            <div className='text-center'><button className='bg-pinkBtn py-1 px-2 rounded my-1 text-white hover:bg-pink-600 duration-150'>Start {name}</button></div>
        </div>
    )
}

const TopicsList = () => {
    const apiData = useContext(APIData)
    return (
        <section className='my-5'>
            <div className='grid gap-40 mx-[10%] grid-cols-2'>
                {
                    apiData?.map(element => <TopicsListCard key={element.id} data={element}></  TopicsListCard>)
                }
            </div>
        </section>
    );
};

export default TopicsList;