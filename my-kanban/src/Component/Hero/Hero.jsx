import React from 'react';
import heroImg from '../../assets/my-kanban-hero.png'

const Hero = () => {
    return (
        <div className='hero__main h-screen flex items-center justify-center pt-[300px]'>
            <div className="container mx-auto">
                <div className="intro text-center">
                    <p className='text-[#13CF8F] font-semibold'>INTRODUCING</p>
                    <h1 className='text-6xl font-bold my-5'>myKanban for <span className='text-[#197AFF]'>Teams</span></h1>
                    <p className='text-xl text-[#495059]'>Organize your work, manage your tasks and goals, collaborate with team mates. <br />
                     Now with Google Docs, JIRA & Slack Integration</p>
                     <div className="hero__btn mt-6">
                        <div className="hero__btn__main">
                            <button className='bg-[#197AFF] text-white px-6 py-2.5 mx-2 rounded-3xl font-semibold'>Get Started</button>
                            <button className=' px-6 py-2.5 mx-2 rounded-3xl font-semibold text-[#197AFF]'>Watch Video</button>
                        </div>
                     </div>
                </div>
                <div className="hero__img mt-12">
                    <img className=' mx-auto' src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;