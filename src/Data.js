import React from 'react';


export const presently = (<p><span className='glow'>SDE intern</span> at <span className='glow'>UnDosTres</span>, Mexico City</p>);
export const projects = [
    {
        id: 1,
        head: 'RISynG',
        buttons: [
            {
                href: 'https://ieeexplore.ieee.org/document/9669481',
                content: 'Publication',
                svg: 'publication'
            },
            {
                to: '/e1ixir',
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
        tag: '3rd ICGA\'22 Winner'
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
        buttons: [
            {
                to: '/e1ixir',
                svg: 'e1ixir'
            },
            {
                href: 'https://github.com/xfurna/AgroGWAS/',
                content: 'GitHub',
                svg: 'github'
            }

        ],
    }
];

export const betarteeb = [
    {
        id: 1,
        main_head: (<><p>ZMS</p><p>~AI~</p></>),
        buttons: [
            {
                to: '/e1ixir',
                svg: 'e1ixir'
            },
            {
                href: 'https://github.com/xfurna/zettelkasten-ai/',
                content: 'GitHub',
                svg: 'github'
            },
            {
                href: 'https://pypi.org/project/zmsai/',
                content: 'PyPi',
                svg: 'pypi'
            }
        ],
        head: "Ai Solution for Luhmann's Zettelkasten",
        description: (
            <>
                <p><span className='glow'>ZMSAI:</span> Ai Powered Zettelkasten Management System</p>
                <p>Developed an <span className='glow'>AI</span>-based solution for uncovering the hidden topical patterns in a corpus of notes in the Zettelkasten.</p>
                <p>The problem of topic-modelling has been recognised as a mix of <span className='glow'>constraint satisfaction problem</span> and <span className='glow'>optimisation problem</span>.</p>
                <p>A <span className='glow'>probabilistic approach</span>, known as <span className='glow'>Latent Dirichlet Allocation</span>, has been implemented in <span className='glow'>python</span> using <span className='glow'>machine learning libraries</span>.</p>
                <p>A command-line utility, coded in objected-oriented python code was packaged & published on PyPi.</p>
                <p><span className='glow'>Impact:</span> Provides a strategic approach to note-taking where a Zettelkasten grows with you into an exo-brain of sorts.</p>

            </>
        ),
    },
    {
        id: 2,
        main_head: (<><p>CoALa</p><p>~py~</p></>),
        buttons: [
            {
                to: '/e1ixir',
                svg: 'e1ixir'
            },
            {
                href: 'https://github.com/xfurna/coalapy',
                content: 'GitHub',
                svg: 'github'
            },
        ],
        head: "Multimodal Omics Data Clustering Algorithm",
        description: (
            <>
                <p><span className='glow'>CoALapy:</span> Convex-combination of Approximate Laplacians in Python</p>
                <p><span className='glow'>Python</span> implementation of the paper- <i>A. Khan and P. Maji, ”Approximate Graph Laplacians for Multimodal Data Clustering,”, IEEE Transactions on Pattern Analysis and Machine Intelligence</i>.</p>
                <p>Code is duly maintained through <span className='glow'>Continuous Integration</span> & <span className='glow'>Continuous Development</span>, enabled by <span className='glow'>Travis CI</span>.</p>

            </>
        ),
    },
    {
        id: 3,
        main_head: 'CoVup',
        buttons: [
            {
                to: '/e1ixir',
                svg: 'e1ixir'
            },
            {
                href: 'https://github.com/xfurna/coalapy',
                content: 'GitHub',
                svg: 'github'
            },
        ],
        head: "CoVup Setu",
        description: (
            <>
                <p><i>Because services that have <span className='glow'>setu</span> in their names are rad' cool.</i></p>
                <p>Developed a service that <span className='glow'>scrapes</span> the internet and emails all the relevant pandemic related stats (like active cases, confirmed cases, recovered cases and deceased) of the concerned districts on a subscription basis.</p>
                <p><span className='glow'>Courtesy:</span> <a href='https://github.com/covid19india/api' target='_blank' rel='noopener noreferrer'>covid19india/api</a></p>
            </>
        ),
    },
    {
        id: 4,
        main_head: 'Bio1ixir',
        buttons: [
            {
                to: '/e1ixir',
                svg: 'e1ixir'
            },
            {
                href: 'https://github.com/bio1ixir/',
                content: 'GitHub',
                svg: 'github'
            },
            {
                href: 'https://bio1ixir.github.io/',
                content: 'Redirect',
                svg: 'link'
            },
        ],
        head: "bio1ixir[dot]github[dot]io",
        description: (
            <>
                <p><span className='glow'>Founded</span> & <span className='glow'>managed</span> Bio1ixir- an organisation to showcase biotech. culture of the institute.</p>
                <p>Starting up from just an idea, crafted an <span className='glow'>organisational structure</span>, <span className='glow'>code of conduct</span> and <span className='glow'>designed UI/UX</span> for the website, providing it with a distinct denomination.</p>
                <p>Created a <span className='glow'>custom Hugo theme</span> for the organisation’s landing page using exclusively <span className='glow'>vanillaJS</span>, <span className='glow'>HTML</span> & <span className='glow'>CSS</span>.</p>
                <p>The website harbours prominent information and projects done by the BSBE-IITJ, UG Class of ’22.</p>
            </>
        ),
    }
];

export const contactme = {
    github: 'https://github.com/xfurna',
    telegram: 'https://t.me/xfurna',
    email: 'mailto:dwivedi.2@iitj.ac.in',
    twitter: 'https://twitter.com/xfurna/',
    linkedin: 'https://www.linkedin.com/in/xfurna/'
};

