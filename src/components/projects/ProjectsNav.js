import React, { useState, useEffect } from 'react'
import CustomScroll from '../scroll/CustomScroll'
import { Collapse } from 'react-bootstrap'
import { FaCaretDown, FaCaretRight, FaCaretUp, FaProjectDiagram } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import utchLogo from '../../assets/images/ucth/logo1.png'
import habithackLogo from '../../assets/images/habithack/logo.png'
import CustomSvg from '../svgs/CustomSvg'
import { IoChevronForward } from 'react-icons/io5'


const webProjects = [
    {
        name: 'library',
        Icon: () => <CustomSvg name="libraryLogo" color="#607B96" />,
        path: '/projects/single-project/library'
    },
    {
        name: 'utch',
        Icon: () => <img src={utchLogo} className='col-lg-12 col-md-7 col-7' />,
        path: '/projects/single-project/utch'
    }, 
    {
        name: 'beatbank',
        Icon: () =>   
            <h2 style={{
                fontFamily: 'Ephesis',
                fontSize: 34,
                fontWeight: 700,
                color: "#E97F18" 
            }}>
                B
            </h2>,
        path: '/projects/single-project/beatbank'
    },        
]

const appProjects = [
    {
        name: 'habithack',
        Icon: () => <img src={habithackLogo} className='col-lg-12 col-md-7 col-7' />,
        path: '/projects/single-project/habithack'
    }
]


export default function ProjectsNav({ onHideOffCanvasNav }){
    
    const navigate = useNavigate()
    const navigateTo = path => {
        navigate(path)
        return onHideOffCanvasNav && onHideOffCanvasNav()
    }
    const goToAllProjects = () => navigateTo('/projects')

    const location = useLocation()
    const pathname = location.pathname

    const [showWebProjects, setShowWebProjects] = useState(true)
    const [showAppProjects, setShowAppProjects] = useState(true)
    const [activeNav, setActiveNav] = useState('all')

    useEffect(() => {
        if(pathname.toLowerCase().includes('library')){
            setActiveNav('library')

        } else if(pathname.toLowerCase().includes('utch')){
            setActiveNav('utch')
        
        } else if(pathname.toLowerCase().includes('habithack')){
            setActiveNav('habithack')
        
        } else{
            setActiveNav('all')
        }

    }, [pathname])    

    const toggleShowWebProjects = () => setShowWebProjects(prev => !prev)
    const toggleShowAppProjects = () => setShowAppProjects(prev => !prev)


    const displayProjects = ({ projects }) => projects.map((project, i) => {
        const { name, Icon, path } = project

        const goToProject = () => navigateTo(path)

        return (
            <div 
                key={i}
                onClick={goToProject}
                className={`${i!=projects.length-1 ? 'mb-3' : 'mb-0'} border-bottom-light-1E2D3D px-3 pointer`}
            >
                <div 
                    className='d-flex align-items-center mb-3'
                >
                    <div className='col-lg-2 col-md-2 col-2'>
                        <Icon />
                    </div>
                    <p className={`${activeNav == name ? 'txt-FFF' : 'txt-607B96'} regular-txt m-0 p-0 px-2`}>{name}</p>
                </div>
            </div>
        )
    })

    return (
        <div
            style={{ minHeight: '80vh' }} 
        >
            <CustomScroll>
                <div 
                    style={{ minHeight: '80vh' }} 
                    className='h-100 border-right-light-1E2D3D'
                >

                    <div 
                        onClick={goToAllProjects} 
                        className={`${'mb-2'} pointer border-bottom-light-1E2D3D p-3 d-flex align-items-center`}
                    >
                        <FaProjectDiagram size={18} color='#fff' />
                        <p className='txt-FFF regular-txt m-0 p-0 px-2'>all</p>
                    </div>                     

                    <div 
                        onClick={toggleShowWebProjects} 
                        className={`${showWebProjects && 'mb-3'} pointer border-bottom-light-1E2D3D p-3 d-flex align-items-center`}
                    >
                        {
                            showWebProjects
                            ?
                                <FaCaretDown size={18} color='#fff' />
                            :
                                <FaCaretUp size={18} color='#fff' />
                        }
                        <p className='txt-FFF regular-txt m-0 p-0 px-2'>web</p>
                    </div>  

                    <Collapse in={showWebProjects}> 
                        <div>
                            { displayProjects({ projects: webProjects }) }
                        </div>
                    </Collapse> 

                    <div 
                        onClick={toggleShowAppProjects} 
                        className={`${showAppProjects && 'mb-3'} pointer border-bottom-light-1E2D3D p-3 d-flex align-items-center`}
                    >
                        {
                            showAppProjects
                            ?
                                <FaCaretDown size={18} color='#fff' />
                            :
                                <FaCaretUp size={18} color='#fff' />
                        }
                        <p className='txt-FFF regular-txt m-0 p-0 px-2'>app</p>
                    </div> 

                    <Collapse in={showAppProjects}> 
                        <div>
                            { displayProjects({ projects: appProjects }) }
                        </div>
                    </Collapse>                                                                            

                </div>                
            </CustomScroll>
        </div>
    )
}