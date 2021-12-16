import React from 'react';


export const presently = (<p><span className='glow'>SDE intern</span> at <span className='glow'>UnDosTres</span></p>);
export const projects = [
    {
        id: 1,
        head: 'RISynG',
        buttons: [
            {
                href: 'none',
                to: '/e1ixir',
                content: '',
                svg: 'e1ixir'
            }

        ],
        role: 'UNDERGRADUATE STUDENT RESEARCHER',
        affiliation: 'IIT Jodhpur, Jan 2020 - Dec 2020',
        description: (
            <>
                <p><span className='glow'>RISynG:</span> Recursively Integrated Synergised Graph-representations</p>
                <p>Developed a robust <span className='glow'>integrative clustering algorithm</span> for cancer subtypes identification.</p>
                <p>Packaged the algorithm in <span className='glow'>hard-coded python</span> with a wrapper shell script.</p>
                <p>Proactively participated in all the phases of research i.e., <span className='glow'>formulation of a testable hypothesis, data collection & pre processing, algorithm engineering, data analysis and manuscript writing</span>.</p>
                <p><span className='glow'>Impact:</span> Personalised therapeutics for cancer treatment.</p>
            </>
        ),
        tag: 'IEEE BIBM \'21'
    },

    {
        id: 2,
        head: (<><p>Agro</p> <p>GWAS</p></>),
        role: 'UNDERGRADUATE STUDENT RESEARCHER',
        affiliation: 'IIT Jodhpur, May 20201 - November 2021',
        description: (
            <>
                <p><span className='glow'>RISynG:</span> Recursively Integrated Synergised Graph-representations</p>
                <p>Developed a robust <span className='glow'>integrative clustering algorithm</span> for cancer subtypes identification.</p>
                <p>Packaged the algorithm in <span className='glow'>hard-coded python</span> with a wrapper shell script.</p>
                <p>Proactively participated in all the phases of research i.e., <span className='glow'>formulation of a testable hypothesis, data collection & pre processing, algorithm engineering, data analysis and manuscript writing</span>.</p>
                <p><span className='glow'>Impact:</span> Personalised therapeutics for cancer treatment.</p>
            </>
        ),
        tag: 'none',
        buttons: [
            {
                href: 'none',
                to: '/e1ixir',
                content: '',
                svg: 'e1ixir'
            },
            {
                href: 'https://github.com/xfurna/AgroGWAS/',
                to: 'none',
                content: 'GitHub',
                svg: 'github'
            }

        ],
    }
];

