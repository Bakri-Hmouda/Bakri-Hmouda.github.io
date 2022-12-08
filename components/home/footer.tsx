import React from 'react'

interface props { pdf_url: string }

function Footer(props: props) {

    const { pdf_url } = props

    return (
        <>
            <footer className='bg-black/60 border-t border-white/20'>
                <div className='container py-2 flex justify-between gap-3 max-sm:px-5 max-sm:flex-col'>
                    {/* contact section */}
                    <div >
                        <h2 className='text-2xl text-accent'>Contact</h2>
                        <ul>
                            <li>
                                <a href='tel:0096171450221' className='hover:text-accent transition-colors'>
                                    <i className="fa-solid fa-phone mx-1 text-sm"></i>
                                    Phone
                                </a>
                            </li>
                            <li>
                                <a href="mailto:bakri.hmouda@gmai.com" className='hover:text-accent transition-colors'>
                                    <i className="fa-solid fa-envelope mx-1 text-sm"></i>
                                    Email
                                </a>
                            </li>


                        </ul>
                    </div>

                    {/* Link section */}
                    <div >
                        <h2 className='text-2xl text-accent'>Links</h2>
                        <ul>
                            <li>
                                <a href="https://github.com/Bakri-Hmouda" className='hover:text-accent transition-colors'>
                                    <i className="fa-brands fa-github mx-1 text-sm"></i>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/bakrihmouda/' className='hover:text-accent transition-colors'>
                                    <i className="fa-brands fa-linkedin mx-1 text-sm"></i>
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://www.behance.net/bakrihmouda" className='hover:text-accent transition-colors'>
                                    <i className="fa-brands fa-square-behance mx-1 text-sm"></i>
                                    behance
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* download section */}
                    <div >
                        <h2 className='text-2xl text-accent'>Downloads</h2>
                        <ul>
                            <li>
                                <a href='/static/downloads/bakri-hmouda-cv.pdf'
                                    className='hover:text-accent transition-colors' target="_blank">
                                    <i className="fa-solid fa-file-arrow-down mx-1 text-sm"></i>
                                    CV
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='py-3 bg-black text-center text-xs text-lightGrey'>Copyright {new Date().getFullYear()} - Bakri Hmouda </div>

            </footer >
        </>
    )
}

export default Footer