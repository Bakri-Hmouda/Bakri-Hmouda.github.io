import React from 'react'



function Footer() {


    return (
        <>
            <footer className='bg-black/70 border-t border-white/20'>
                <div className='container py-2 flex gap-3 max-sm:px-5 max-sm:flex-col'>
                    {/* contact section */}
                    <div className='grow'>
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
                    <div className='grow'>
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
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </footer >
        </>
    )
}

export default Footer
