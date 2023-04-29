import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import './About.css'
import Me from '../../Static/images/me2.jpg'
import { contactme } from '../../Data'

const Bio = () => {
    return (
        <div className='bio'>
            <p>Hi! I’m <span className='glow' style={{ fontFamily: 'Beth Ellen' }}>xfurna</span>. You can call me <span className='glow' style={{ fontFamily: 'Beth Ellen' }}>xf</span>.</p>

            <p>I am also known as <span className='glow'>Archit</span>. I don’t use it all the time, but the fact is, I am.</p>

            <p>I have done my <span className='glow'>BTech</span> in <span className='glow'>Biotechnology</span> from <span className='glow'>IIT Jodhpur</span> (2022). During my BTech, I have served as an <span className='glow'>Undergraduate Student Researcher</span> in the <span className='glow'>Computational Biology lab</span>. My research work primarily involved the investigation and development of novel machine learning algorithms for biological data. During my time there, we have published two papers in a reputed peer-reviewed journal and a highly competitive international conference respectively.</p>

            <p>Right now, I work as a <span className='glow'>Software Engineer</span> at <span className='glow'>UnDosTres</span>, a payment app in Mexico. My job involves adding backend support using techniques like Object-Relational Mapping within a Model-View-Controller design pattern to create scalable and maintainable features. I work on developing the e-commerce business logic, which helps the company make more money.</p>

            <p>I am a firm believer and practitioner of the <a href='https://jamesclear.com/first-principles' rel='noopener noreferrer' target='_blank'>first principle of thinking</a>. I perceive the world in accordance with its function rather than its form. This mindset helps me to have a clear understanding of the things which, I believe, is a great step in the direction of the ideology of <a href='https://www.ted.com/talks/sal_khan_let_s_teach_for_mastery_not_test_scores?language=en' rel='noopener noreferrer' target='_blank'>learning for mastery</a>.</p>

            <p>The rest is irrelevant, as is all the above</p>

            <p>I'm usually a man of few words in person. Nonetheless, hang out with me for an hour or two, only to find yourself in the extreme depths of the philosophical discourse on the sheer existence of things!</p>

            <p>If you would like to roll around in the dirt with me or just argue about whether or not Shakespeare really wrote Shakespeare's plays, don’t hesitate to contact me.</p>
            <p>With a smile,</p>
            <hr />
            <div className='glow' align='center' style={{ color: '#ffffffb5', fontSize: '24px', fontFamily: 'Beth Ellen' }}>xf</div>
            <hr />

        </div>
    );
};

const Contact = () => {
    return (
        <div className='contactme'>
            <div>
                <a href={contactme.github} rel='noopener noreferrer' target='_blank'>
                    <div className='buttons' content='GitHub'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff91ec" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9.6533203,20.8652344c-0.0001831-0.1481934-0.065979-0.2887573-0.1796875-0.3837891c-0.114624-0.093689-0.2642212-0.1332397-0.4101562-0.1083984c-1.5908203,0.2949219-3.6083984,0.2988281-4.1943359-1.3466797c-0.3604126-0.8795166-0.9379883-1.6533203-1.6787109-2.2490234c-0.1533203-0.0786133-0.2915039-0.1837158-0.4082031-0.3104858c-0.0394287-0.2409058-0.2471313-0.4180298-0.4912109-0.4190063H2.2890015c-0.2753296,0-0.4989014,0.2226562-0.5,0.4980469c-0.0029297,0.5703125,0.7109375,0.9970703,0.921875,1.109375c0.5300293,0.4760742,0.9473267,1.06427,1.2217407,1.7217407C4.28125,20.3565063,5.34375,21.8721313,8.6552734,21.4492798c0.0029297,0.3642578,0.0078125,0.5527344,0.0117188,0.6962891l0.0048828,0.2949219c0,0.276123,0.223877,0.5,0.5,0.5s0.5-0.223877,0.5-0.5l-0.0048828-0.3223267C9.6611328,21.9169922,9.6533203,21.6270142,9.6533203,20.8652344z M20.9208984,5.2236328c-0.0302734-0.0380859-0.0625-0.078125-0.0957031-0.1181641c0.0671387-0.2113647,0.1199341-0.427002,0.1582031-0.6454468c0.1547852-1.0731812,0.0175171-2.1682739-0.3974609-3.1700439C20.53125,1.1523438,20.4181519,1.0460815,20.2773438,1c-0.1416016-0.046875-1.4335938-0.3945312-4.1298828,1.3818359c-2.2589722-0.5742188-4.6257324-0.5742188-6.8847656,0C6.5673828,0.6259766,5.2832031,0.9550781,5.140625,0.9970703C4.9971313,1.0423584,4.8814087,1.1494751,4.8251953,1.2890625c-0.4225464,1.0169067-0.55896,2.1299438-0.3945312,3.21875c0.038269,0.199646,0.086853,0.3971558,0.1455078,0.5917969C4.5410156,5.1426392,4.5078125,5.1855469,4.4765625,5.2275391C3.6300049,6.3015747,3.1795654,7.6346436,3.2011719,9.0020142C3.1987305,9.3121338,3.2130737,9.6221313,3.2441406,9.9307251c0.3398438,4.6640625,3.3486328,5.9619141,5.9473267,6.4052734c-0.1692505,0.3034058-0.2957764,0.6287231-0.3760376,0.9667969c-0.0657959,0.2680054,0.0981445,0.5386963,0.3662109,0.6044922s0.5386963-0.0981445,0.6044922-0.3662109c0.0925293-0.4596558,0.3247681-0.8795166,0.664978-1.2021484c0.2080688-0.1820068,0.229248-0.49823,0.0472412-0.7062988c-0.0820312-0.093689-0.1959839-0.1535034-0.3197021-0.1677246c-2.7567749-0.3125-5.618103-1.2236328-5.9384766-5.625C4.2119141,9.5615234,4.1989136,9.2817993,4.2011719,9.0020142C4.182312,7.854248,4.5603638,6.7351685,5.2714844,5.8339844c0.0751953-0.1015625,0.1591797-0.1943359,0.2421875-0.2861328c0.12677-0.1398926,0.1641846-0.3392334,0.0966797-0.515625C5.5250244,4.8067017,5.4599609,4.5740356,5.4160156,4.3369141c-0.119751-0.803894-0.039917-1.6248779,0.2324219-2.390625c1.187561,0.1653442,2.309082,0.645874,3.2479858,1.3916016c0.1212158,0.0817871,0.2723389,0.1060791,0.4130859,0.0664062c2.2244263-0.6035156,4.569519-0.6035156,6.7939453,0c0.1415405,0.0395508,0.2932739,0.0148926,0.414978-0.0673828c0.932312-0.753418,2.0534058-1.2368164,3.241272-1.3974609c0.269165,0.7542114,0.3505859,1.5626831,0.2373047,2.3554688c-0.0441895,0.2519531-0.1132202,0.4989624-0.2060547,0.7373047c-0.0675049,0.1763916-0.0301514,0.3756714,0.0966797,0.515625c0.0878906,0.0966797,0.1757812,0.2050781,0.2528687,0.3017578c0.7128296,0.8942261,1.0913696,2.0090332,1.0704346,3.1524048c0.0023193,0.2860107-0.0117188,0.5719604-0.0419922,0.8564453c-0.3173828,4.3808594-3.1894531,5.2919922-5.9570312,5.6064453c-0.2745972,0.0314941-0.4716797,0.2797241-0.4401245,0.5543823c0.0142212,0.1236572,0.0739746,0.2376099,0.1676636,0.3195801c0.3447266,0.3249512,0.5755615,0.7523193,0.6582642,1.21875c0.0852051,0.3293457,0.124939,0.6687622,0.118103,1.0087891v2.4590454c-0.0106812,0.6757812-0.0106812,1.1826172-0.0106812,1.414978c0.0003662,0.276123,0.2245483,0.4996948,0.5006714,0.4993286c0.2755737-0.0004272,0.4989014-0.2237549,0.4993286-0.4993286c0-0.2304688,0-0.7314453,0.0106812-1.4072266v-2.4667969c0.0078735-0.4234619-0.0424194-0.8460083-0.149353-1.2558594c-0.0752563-0.3407593-0.1988525-0.6689453-0.3671875-0.9746094c2.6083984-0.4423828,5.6288452-1.7392578,5.9658203-6.3847656c0.0330811-0.3153076,0.0484009-0.6322021,0.0458984-0.9492188C22.2337646,7.6307373,21.7775269,6.2945557,20.9208984,5.2236328z" /></svg>
                    </div>
                </a>
            </div>
            <div>
                <a href={contactme.telegram} rel='noopener noreferrer' target='_blank'>
                    <div className='buttons' content='Telegram'>
                        <svg width="24px" height="24px" version="1.1" fill="none" stroke="#ff91ec" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" /></svg>
                    </div>
                </a>
            </div>
            <div>
                <a href={contactme.twitter} rel='noopener noreferrer' target='_blank'>
                    <div className='buttons' content='Twitter'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff91ec" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                    </div>
                </a>
            </div>
            <div>
                <a href={contactme.email} rel='noopener noreferrer' target='_blank'>
                    <div className='buttons' content='Email'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff91ec" stroke="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" /></svg>
                    </div>
                </a>
            </div>
            <div>
                <a href={contactme.linkedin} rel='noopener noreferrer' target='_blank'>
                    <div className='buttons' content='Linkedin'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff91ec" stroke="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                    </div>
                </a>
            </div>

        </div >
    );
};

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    document.title = "About"
    return (
        <>
            <Nav />
            <div style={{ margin: '15px' }}>
                <div align='center' className="about-head" data-text="Archit 'xfurna' dwivedi"></div>
                <hr />
                <div className='about'>
                    <img src={Me} align='center' alt='me!' />
                    <div align='center' className="about-head" data-text="A subtle machinery of awe..." style={{ paddingTop: '0vmin' }}><hr /></div>
                    <Contact />
                    <Bio />

                </div>
            </div>
        </>
    );
}

export default About;
