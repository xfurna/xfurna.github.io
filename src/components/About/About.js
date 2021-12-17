import React from 'react';
import Nav from '../Nav/Nav';
import './About.css'
import Me from '../../Static/me2.jpeg'

const About = () => {
    return (
        <>
            <Nav />
            <div style={{ margin: '15px' }}>
                <div align='center' className="about-head" data-text="Archit 'xfurna' dwivedi"></div>
                <hr style={{ marginBottom: '25px' }} />
                <div className='about'>
                    <img src={Me} width='40%' align='center' alt='me!' />
                    <div className='bio' align='justify'>
                        <p>Hi! I am <strong>Archit</strong>, currently a senior year undergraduate student at <strong>IIT Jodhpur</strong> in the department of <strong>Bioscience and Bioengineering</strong>. I am a highly dedicated and hard-working individual seeking an entry-level position to begin my career in a high-level professional environment. By definition, what I want to do in life is called entrepreneurship (as in, doing my own thing). But don&rsquo;t let the wordings fool you. <em>My goals are beyond your understanding</em>, so to speak.</p>
                        <p>I am a firm believer and practitioner of <a href="https://jamesclear.com/first-principles">the first principle of thinking</a>. I perceive the world in accordance with its function rather than its form. This mindset helps me to have a clear understanding of the things which, I believe, is a great step in the direction of the ideology of <a href="https://www.ted.com/talks/sal_khan_let_s_teach_for_mastery_not_test_scores?language=en">learning for mastery</a>.</p>
                        <p>On best days, you’ll catch me reading books, research papers, listening to podcasts, tweeting, pushing pixels or petting some or the other of my pet projects. I can also be found walking/cycling distances while in <em>estado-de-resonancia</em> with the melodies of <strong>Led Zeppelin</strong> and <strong>Deep Purple</strong> or the trip-hop numbers of <strong>Lucian</strong>. But most often, I listen to heavy/death metal by <strong>S.O.A.D</strong>, <strong>Otep</strong>, <strong>As I Lay Dying</strong> or even <strong>Obituary</strong> at times.</p>
                        <h2 id="experience">Experience</h2>
                        <p>I have more than one and a half years of experience working in the Computational Biology lab at IIT Jodhpur. I have worked on a range of projects there. While working on these projects I have explored various ML/DL algorithms and done statistical analyses of biological data. My research work has resulted in two publications (submitted after minor revision) in a reputed peer-reviewed journal and an international conference respectively.</p>
                        <p>My work includes the development of an integrative clustering method for multi-view omics data; demonstration of the effectiveness of the proposed method over other methods; and, establishing biological relevance for the obtained results.
                Currently, I am working on Genome-Wide Association Studies which involves rigorous statistical analysis and deep learning. Although this project is still in its early stage yet I have gained a lot of experience in High-Performance Computing, statistical modelling and deep learning.</p>
                        <p>I have only a few projects worth of experience in AI/ML, but the flip side of my inexperience tends to be energy, enthusiasm, and a willingness to work and hustle in order to learn.</p>
                        <h2 id="random-facts">Random Facts</h2>
                        <ul>
                            <li><em>Archit</em>, as I am, is an ancient word of <em>Sanskrit</em> origin (अर्चित) and form <em>&lsquo;Arcita&rsquo;</em> which literally means <em>worshipped/praised/respected</em>.</li>
                            <li>It&rsquo;s <em>s.foor.nuh</em> and not <em>ex.foor.naa</em> or <em>ex.foor.nuh</em> or anything else.</li>
                            <li>In my opinion, my whole life is a <a href="https://joshkaufman.net/explore-exploit/">bandit problem</a>.</li>
                            <li>I hang out on twitter.</li>
                            <li>I drink a lot of coffee.</li>
                            <li>My hobby: Imagining people speaking in someone else&rsquo;s voice.</li>
                        </ul>
                        <p>If you would like to know more or just say hi, don’t hesitate to contact me. Find my contact details below. I generally take time to reply, so kindly bear with me.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
