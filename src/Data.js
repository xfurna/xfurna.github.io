import React from 'react';


export const presently = (<p><span className='glow'>SDE intern</span> at <span className='glow'>UnDosTres</span>, Mexico City</p>);
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
                <p><span className='glow'>RISynG:</span> <span className='glow'>R</span>ecursively <span className='glow'>I</span>ntegrated <span className='glow'>Syn</span>ergised <span className='glow'>G</span>raph-representations</p>
                <p>Developed a robust (both complexity-wise and accuracy-wise) <span className='glow'>integrative clustering algorithm</span> for multi-view omics data that outperformed the conventional methods of integrative clustering.</p>
                <p>Written a quality <span className='glow'>object-oriented python code</span> to package the algorithm into an easy-to-use <span className='glow'>command-line interface app</span>.</p>
                <p>Proactively participated in all the phases of research; Principally drove the <span className='glow'>formulation of a testable hypothesis, algorithm engineering, data analysis</span> and <span className='glow'>manuscript writing</span>.</p>
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
                <p><span className='glow'>AgroGWAS:</span> GWAS (Genome-Wide Association Studies) for agronomics.</p>
                <p>Implemented a <span className='glow'>residual neural network</span> for the determination of SNP effect-size of Soybean NAM population.</p>
                <p>Conducted a comparative analysis on the SoyNAM dataset thereby <span className='glow'>challenging the conventional statistical methods</span> of GWAS for their inadequacy in the case of complex traits.</p>
                <p>Model created on <span className='glow'>Keras</span> with <span className='glow'>TensorFlow</span>.</p>
                <p>Model trained on <a href='https://images.nvidia.com/content/technologies/volta/pdf/tesla-volta-v100-datasheet-letter-fnl-web.pdf' rel='noopener noreferrer' target='_blank'>Tesla V100-PCIE-32GB GPU</a>.</p>
                <p><span className='glow'>Impact:</span> Decoding the complex traits/diseases hence facilitating the clinical risk prognosis.</p>
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

export const contactme = {
    github: 'https://github.com/xfurna',
    telegram: 'https://t.me/xfurna',
    email: 'mailto:dwivedi.2@iitj.ac.in',
    twitter: 'https://twitter.com/xfurna/',
    linkedin: 'https://www.linkedin.com/in/archit-dwivedi-7218b5162/'
};