import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import CustomSvg from "../../svgs/CustomSvg";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import utchLogo from '../../../assets/images/ucth/logo1.png'
import habithackLogo from '../../../assets/images/habithack/logo.png'

export const projectData = [
    {
        name: 'beatbank',
        type: 'web',
        Logo: ({ width, height }) => 
            <h2 style={{
                fontFamily: 'Ephesis',
                fontSize: 34,
                fontWeight: 700,
                color: "#E97F18" 
            }}>
                B
            </h2>,
        Icon: () => <FaNode size={18} color="#011221" />,
        description: 'E-commerce site for musical beat purchase and sales',
        imgClassName: 'all-projects-beatbank-bg',
        projectStacks: [
            {
                Icon: () => <FaReact size={80} color="#5565E8" />,
                name: 'React'
            },
            {
                Icon: () => <FaNode size={80} color="#D6E225" />,
                name: 'Node Js'
            },
            {
                Icon: () => <BiLogoPostgresql size={80} color="#4D5BCE" />,
                name: 'postgreSQL'
            }, 
            {
                Icon: () => <SiExpress size={80} color="#D6E225" />,
                name: 'Express.js'
            },            
        ],
        previewLink: 'https://c-genesis.github.io/beatsbank/'
    },
    {
        name: 'library',
        type: 'web',
        Logo: ({ width, height }) => <CustomSvg name="libraryLogo" color="#607B96" height={height} width={width} />,
        Icon: () => <FaReact size={18} color="#011221" />,
        description: 'A simple school library demo project',
        imgClassName: 'all-projects-library-bg',
        projectStacks: [
            {
                Icon: () => <FaReact size={80} color="#5565E8" />,
                name: 'React'
            },
            {
                Icon: () => <FaHtml5 size={80} color="#c9c901" />,
                name: 'HTML'
            },
            {
                Icon: () => <FaCss3Alt size={80} color="#43D9AD" />,
                name: 'CSS'
            },            
        ],
        previewLink: 'https://benny506.github.io/library/'
    },
    {
        name: 'utch',
        type: 'web',
        Logo: () => <img src={utchLogo} className='col-lg-12 col-md-12 col-12' />,
        Icon: () => <FaReact size={18} color="#011221" />,
        description: "UTCH; A school's hospital landing page",
        imgClassName: 'all-projects-utch-bg',
        projectStacks: [
            {
                Icon: () => <FaReact size={80} color="#5565E8" />,
                name: 'React'
            },
            {
                Icon: () => <FaHtml5 size={80} color="#c9c901" />,
                name: 'HTML'
            },
            {
                Icon: () => <FaCss3Alt size={80} color="#43D9AD" />,
                name: 'CSS'
            },            
        ],
        previewLink: 'https://benny506.github.io/ucth/'
    },
    {
        name: 'habithack',
        type: 'app',
        Logo: () => <img src={habithackLogo} className='col-lg-12 col-md-12 col-12' />,
        Icon: () => <FaNode size={18} color="#011221" />,
        description: "A habit tracking application. Contains focus mode watcher",
        imgClassName: 'all-projects-habithack-bg',
        projectStacks: [
            {
                Icon: () => <FaReact size={80} color="#5565E8" />,
                name: 'React Native'
            },
            {
                Icon: () => <FaNode size={80} color="#D6E225" />,
                name: 'Node Js'
            },
            {
                Icon: () => <BiLogoPostgresql size={80} color="#4D5BCE" />,
                name: 'postgreSQL'
            }, 
            {
                Icon: () => <FaJava size={80} color="#5565E8" />,
                name: 'Java'
            },                                                
        ],
        previewLink: null
    }    
]