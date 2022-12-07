import React from 'react'
import Box from './box'



function Projects() {


    return (
        <>
            <h2 className='text-2xl text-yellow-400 '>Projects</h2>
            <div className=' pl-2 pt-2 border-l-2 border-yellow-400 '>

                <p className='text-sm'>During the last two years, I have successfully completed several project using multiple tech-stack. Some of the project were built in collaboration with a team, and some are solo project for real clients. Unfortunately not all of them were hosted, since some of them  were built for training purposes.</p>

                <div className='flex flex-wrap gap-3 mt-3'>
                    {/*wordpress section */}
                    <div className='border border-lightGrey bg-lightGrey/10 rounded  grow overflow-hidden'>
                        <div className='p-2 pl-5 bg-darkGrey'>
                            <i className='devicon-wordpress-plain mr-1'></i>
                            <h3 className='text-lg inline-block '>wordpress</h3>
                        </div>

                        <div className='p-2 pl-5'>
                            <ul className='pl-5 list-disc'>

                                <li>
                                    Wasil Delivery
                                    <a href='https://wasildelivery.com/' target='_blank'>
                                        <i className="fa-solid fa-link mx-1 text-blue-400 hover:text-accent transition-colors"></i>
                                    </a>
                                </li>
                                <li>
                                    Ultra Vision Marine
                                    <a href='https://ultravisionmarine.com/' target='_blank'>
                                        <i className="fa-solid fa-link mx-1 text-blue-400 hover:text-accent transition-colors"></i>
                                    </a>
                                </li>

                                <li>Herma Chemical</li>
                            </ul>
                        </div>
                    </div>

                    {/*React section */}
                    <div className='border border-lightGrey bg-lightGrey/10 rounded  grow overflow-hidden'>
                        <div className='p-2 pl-5 bg-darkGrey'>
                            <i className='devicon-react-plain mr-1'></i>
                            <h3 className='text-lg inline-block '>React</h3>
                        </div>

                        <div className='p-2 pl-5'>
                            <ul className='pl-5 list-disc'>
                                <li>weather app</li>
                                <li>Ransom - anonymous feedback website</li>
                                <li>upCash - small business expense tracker</li>
                                <li>kheirwbarakeh - e-commerce for a local business</li>
                            </ul>

                            <p className='text-sm text-accent pt-5 '>*all projects are full-stack projects using <strong>React</strong> for the frontend, and <strong>node</strong> with <strong>express</strong> or <strong>laravel</strong> for the backend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
