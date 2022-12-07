import React from 'react'
import Box from './box'



function Experience() {

    return (
        <>
            <h2 className='text-2xl text-yellow-400 '>Experience</h2>
            <div className='pl-2 pt-2 border-l-2 border-yellow-400'>

                {/* frontend */}
                <h3 className='text-lg'>frontend</h3>
                <div className='flex gap-3 overflow-hidden flex-wrap '>

                    <Box>
                        <i className="devicon-html5-plain"></i>
                        <h4 className='text-base' >HTML</h4>
                    </Box>

                    <Box>
                        <i className="devicon-css3-plain"></i>
                        <h4 className='text-base' >CSS</h4>
                    </Box>

                    <Box>
                        <i className="devicon-javascript-plain"></i>
                        <h4 className='text-base' >JavaScript</h4>
                    </Box>

                    <Box>
                        <i className="devicon-php-plain"></i>
                        <h4 className='text-base' >PHP</h4>
                    </Box>

                    <Box>
                        <i className="devicon-react-original"></i>
                        <h4 className='text-base ' >React</h4>
                    </Box>

                    <Box>
                        <i className="devicon-nextjs-original"></i>
                        <h4 className='text-base' >Next<small>js</small></h4>
                    </Box>

                    <Box>
                        <i className="devicon-angularjs-plain"></i>
                        <h4 className='text-base' >Angular</h4>
                    </Box>

                    <Box>
                        <i className="devicon-materialui-plain"></i>
                        <h4 className='text-base' >MUI</h4>
                    </Box>

                    <Box>
                        <i className="devicon-tailwindcss-plain"></i>
                        <h4 className='text-base' >tailwind</h4>
                    </Box>

                </div>

                {/* backend  */}
                <h3 className='text-lg mt-5'>backend</h3>
                <div className='flex gap-3 overflow-hidden flex-wrap'>

                    <Box>
                        <i className="devicon-nodejs-plain"></i>
                        <h4 className='text-base' >node<small>js</small></h4>
                    </Box>

                    <Box>
                        <i className="devicon-express-original"></i>
                        <h4 className='text-base' >express</h4>
                    </Box>

                    <Box>
                        <i className="devicon-laravel-plain"></i>
                        <h4 className='text-base ' >laravel</h4>
                    </Box>

                    <Box>
                        <i className="devicon-mongodb-plain"></i>
                        <h4 className='text-base' >mongoDB</h4>
                    </Box>


                    <Box>
                        <i className="devicon-mysql-plain"></i>
                        <h4 className='text-base' >mysql</h4>
                    </Box>

                </div>

                {/* cms and devops */}
                <h3 className='text-lg mt-5'>CMS & DevOps</h3>
                <div className='flex gap-3 overflow-hidden flex-wrap'>

                    <Box>
                        <i className="devicon-wordpress-plain"></i>
                        <h4 className='text-base' >wordpress</h4>
                    </Box>

                    <Box>
                        <i className="devicon-git-plain"></i>
                        <h4 className='text-base' >git</h4>
                    </Box>

                    <Box>
                        <i className="devicon-trello-plain"></i>
                        <h4 className='text-base' >trello</h4>
                    </Box>
                </div>

            </div>

        </>
    )
}

export default Experience
