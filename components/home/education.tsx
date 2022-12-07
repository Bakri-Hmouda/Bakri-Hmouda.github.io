import React from 'react'


function Education() {


    return (
        <>
            <h2 className='text-2xl text-yellow-400 '>Education & Certifications</h2>
            <div className=' pl-2 pt-2 border-l-2 border-yellow-400 '>
                <div className='flex flex-wrap gap-3'>
                    {/*Education section */}
                    <div className='border border-lightGrey bg-lightGrey/10 rounded  grow overflow-hidden'>
                        <div className='p-2 pl-5 bg-darkGrey'>
                            <i className='devicon-Education-plain mr-1'></i>
                            <h3 className='text-lg inline-block '>Education</h3>
                        </div>

                        <div className='p-2 pl-5'>
                            <ul className='pl-5 list-disc'>
                                <li>
                                    Technical Baccalaureate Diploma - Accounting (2009)
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*Certification section */}
                    <div className='border border-lightGrey bg-lightGrey/10 rounded  grow overflow-hidden'>
                        <div className='p-2 pl-5 bg-darkGrey'>
                            <i className='devicon-Education-plain mr-1'></i>
                            <h3 className='text-lg inline-block '>Certification</h3>
                        </div>

                        <div className='p-2 pl-5'>
                            <ul className='pl-5 list-disc'>
                                <li>
                                    CODI T02 - Full-stack web developer (2022)
                                </li>
                                <li>
                                    HackerRank - Javascript
                                    <a href='https://www.hackerrank.com/certificates/762e0a2326ef' target='_blank'>
                                        <i className="fa-solid fa-link mx-1 text-blue-400 hover:text-accent transition-colors"></i>
                                    </a>
                                </li>
                                <li>
                                    HackerRank - CSS
                                    <a href='https://www.hackerrank.com/certificates/4ed6784774fd' target='_blank'>
                                        <i className="fa-solid fa-link mx-1 text-blue-400 hover:text-accent transition-colors"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Education
