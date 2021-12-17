import React from 'react';
import Nav from '../Nav/Nav';
import './About.css'
import Me from '../../Static/me2.jpeg'


const Bio = () => {
    return (
        <div className='bio'>
            <p>Hi! I’m <span className='glow' style={{ fontFamily: 'Beth Ellen' }}>xfurna</span>. You can call me <span className='glow' style={{ fontFamily: 'Beth Ellen' }}>xf</span>.</p>
            <p>I am also known as <span className='glow'>Archit</span>. I don’t use it all the time, but the fact is, I am.</p>
            <p>Currently, I am an <span className='glow'>undergrad senior</span> at <span className='glow'>IIT Jodhpur</span>. I was highly fascinated by programming right from the start when I was first introduced to it in school. Initially, I used to fool around exploring things like web development, automation, CLI app development, scripting, etc. Then in my 4th semester, I joined the <span className='glow'>Computational Biology lab</span> as an <span className='glow'>Undergraduate Student Researcher</span> under the guidance of <a href='http://home.iitj.ac.in/~sushmitapaul/' rel='noopener noreferrer' target='_blank'>Dr Sushmita Paul</a>. There I got the taste of ML/DL for the very first time. And I was hooked! Now I have around two years of experience working there. During this time have investigated & developed various ML/DL algorithms and done statistical analyses on biological data. My research work has resulted in two publications in a reputed peer-reviewed journal and a highly competitive international conference respectively. I have only a few projects worth of experience in AI/ML, but the flip side of my inexperience tends to be energy, enthusiasm, and a willingness to work and hustle to learn.</p>

            <p>I am a firm believer and practitioner of the <a href='https://jamesclear.com/first-principles' rel='noopener noreferrer' target='_blank'>first principle of thinking</a>. I perceive the world in accordance with its function rather than its form. This mindset helps me to have a clear understanding of the things which, I believe, is a great step in the direction of the ideology of <a href='https://www.ted.com/talks/sal_khan_let_s_teach_for_mastery_not_test_scores?language=en' rel='noopener noreferrer' target='_blank'>learning for mastery</a>.</p>

            <p>On best days, you’ll catch me reading books, research papers, doing math meditation, listening to podcasts, tweeting, pushing pixels or petting some or the other of my pet projects (boy, they're many). I can also be found walking/cycling distances while in the 'estado-de-resonancia' with the melodies of <a href='https://youtu.be/X791IzOwt3Q' rel='noopener noreferrer' target='_blank'>Led Zeppelin</a> and <a href='https://youtu.be/OorZcOzNcgE' rel='noopener noreferrer' target='_blank'>Deep Purple</a> or the heavy/death metal of <a href='https://youtu.be/GF5FXYmBrc4' rel='noopener noreferrer' target='_blank'>Opeth</a>, <a href='https://youtu.be/CSvFpBOe8eY' rel='noopener noreferrer' target='_blank'>S.O.A.D</a> and <a href='https://youtu.be/AW5v4Ohxk5k' rel='noopener noreferrer' target='_blank'>Porcupine Tree</a> (even <a href='https://youtu.be/3IRja90Ua0s' rel='noopener noreferrer' target='_blank'>Obituary</a>, at times); Because <a href='https://www.goodreads.com/quotes/634773-only-ideas-won-by-walking-have-any-value' rel='noopener noreferrer' target='_blank'>only ideas won by walking have any worth</a>.</p>

            <p>I'm usually a man of few words in person. Nonetheless, hang out with me for an hour or two, only to discover the extreme depths of the philosophical discourse on sheer existence of things!</p>

            <p>If you would like to roll around in the dirt with me or just argue about whether or not Shakespeare really wrote Shakespeare's plays, don’t hesitate to contact me.</p>

        </div>
    );
};


const About = () => {
    return (
        <>
            <Nav />
            <div style={{ margin: '15px' }}>
                <div align='center' className="about-head" data-text="Archit 'xfurna' dwivedi"></div>
                <hr />
                <div className='about'>
                    <img src={Me} align='center' alt='me!' />
                    <div align='center' className="about-head" data-text="A subtle machinery of awe..." style={{ paddingTop: '0vmin' }}><hr /></div>
                    <Bio />
                </div>
            </div>
        </>
    );
}

export default About;
