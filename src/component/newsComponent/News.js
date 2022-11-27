import React, { useState, useEffect } from 'react';
import Categories from '../categories/Categories';
import data from "../utils/data/data.json"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function News({isthere}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000)

    }, [])


    return (
        <section className={`bg-white -10 pb-24  md:mt-24 flex items-start ${isthere ? "pl-[292px] md:pl-0" : ""}`}>
            <div className={`${isthere ? " border-r-2" : ""}`}>
                <div className="border-b mx-16 md:mx-0 my-5">
                    <ul className='flex  w-[30%] text-[#181818] font-normal  rounded-md mr-5 md:mr-0 font-space text-lg   justify-between'>
                        <li className='border-b py-4 border-black px-5'><button>Featured</button></li>
                        <li><button className='py-4 text-[#afaeae]  px-5'>Popular</button></li>
                        <li><button className='py-4 text-[#afaeae]  px-5'>Recent</button></li>
                    </ul>
                </div>
                <div className={`grid gap-10   ${isthere ? "w-[50vw]": "w-[63vw] md:w-full"} md:w-full px-16 md:px-4`}>
                    {
                        data.map((item, idx) => (
                            <div key={idx} className="flex my-2">
                                <div className="relative h-[184px] md:h-[160px] md:w-[230px] w-[266px] ">
                                    {
                                        loading ? <Skeleton square height="100%" /> : <img src={item.image} className="h-full rounded-md w-full" alt="" />
                                    }
                                </div>
                                <div className='ml-4 w-full'>
                                    {
                                        loading ? <Skeleton  /> : <a className='font-normal text-[#6a6a6a] rounded-md mr-9 md:mr-0 mb-2 font-space text-base md:text-sm ' href={idx}>{item.headline}</a>
                                    }
                                    {
                                        loading ? <Skeleton  /> : <h2 className='font-medium text-[#000000] rounded-md mr-9 md:mr-0 mt-2 font-space md:text-xl text-2xl'>{item.title}</h2>
                                    }
                                    {
                                        loading ? <Skeleton count={5} /> : <p className='font-normal text-[#6a6a6a] rounded-md mr-9 md:mr-0 mt-3 font-space text-base md:text-sm '>{item.description}</p>
                                    }
                                    <div className="flex font-normal my-2 text-[#181818] rounded-md mr-9 md:mr-0  font-space text-sm md:text-xs items-center">
                                        {
                                            loading ? <Skeleton  /> : <span>{item.host}</span>
                                        }
                                        <div className='h-1 w-1 mx-4  bg-black rounded-full'></div>
                                        {
                                            loading ? <Skeleton /> : <span>{item.date}</span>
                                        }
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Categories isthere={isthere} />
        </section>
    )
}
