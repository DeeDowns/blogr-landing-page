import React from 'react'
import './Main.css'
import editorSvgDesktop from '../images/illustration-editor-desktop.svg'
import phonesSvg from '../images/illustration-phones.svg'
import laptopSvgDesktop from '../images/illustration-laptop-desktop.svg'
import circles from '../images/bg-pattern-circles.svg'

const Main = () => {

    return (
        <main>
            <h3>Designed for the future</h3>
            <section className='section-one'>
                <div className='section-one-content'>
                    <h4>Introducing an extensible editor</h4>
                    <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
                
                    <h4>Robust content management</h4>
                    <p>  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                </div>
                <img src={editorSvgDesktop} alt='editor' />
            </section>

            <section className='section-two'>
                {/* <img className='circles' src={circles} alt='cirlces'/> */}
                <img src={phonesSvg} alt='editor' />

                <div className='section-two-content'>
                    <h3>State of the Art Infrastructure</h3>
                    <p>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </section>

            <section className='section-three'>
                <img src={laptopSvgDesktop} alt='editor' />

                <div className='section-two-content'>
                    <h4>Free, open, simple</h4>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                    <h4>Powerful tooling</h4>
                    <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.</p>
                </div>
            </section>
        </main>
    )
}

export default Main