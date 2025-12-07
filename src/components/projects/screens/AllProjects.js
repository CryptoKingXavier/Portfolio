import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaFolderOpen, FaReact } from "react-icons/fa";
import { projectData } from "../auxiliary/projectsData";
import { useNavigate } from "react-router-dom";


export default function AllProjects({ onShowOffCanvasNav }){
    
    const navigate = useNavigate()
    const navigateTo = path => navigate(path)

    const displayProjects = projectData.map((project, i) => {
        const { name, imgClassName, description, Icon } = project 

        const goToSingleProject = () => navigateTo(`/projects/single-project/${name}`)

        return (
            <div 
                key={i}
                className="col-lg-4 col-md-6 col-12 mx-0 mb-3"
            >
                <div className="col-lg-11 col-md-11 col-12">
                    <p className="m-0 p-0 small-txt txt-5565E8 mb-2">Project {i+1} <span className="txt-607B96">// {name}</span></p>
                    <div className="bg-011221 all-projects-single-project-bg">
                        <div 
                            style={{ minHeight: '25vh' }} 
                            className={` ${imgClassName} mb-2 all-projects-single-project-img-bg bg-img d-flex align-items-start justify-content-end`}
                        >
                            <div className="p-0 m-0 p-1 bg-86E1F9 m-2">
                                <Icon />
                            </div>
                        </div>
                        <div className="p-3">
                            <p className="m-0 mb-3 p-0 regular-txt txt-607B96">{description}</p>
                            <button onClick={goToSingleProject} className="extra-small-txt txt-FFF bg-1C2B3A p-2 rounded-3">
                                view-project
                            </button>                                    
                        </div>
                    </div>
                </div>
            </div>            
        )
    })

    return (
        <div
            style={{ maxHeight: '80vh', minHeight: '80vh' }}
            className="w-100 h-100 d-flex flex-column"        
        >
            <div 
                className="border-bottom-light-1E2D3D border-right-light-1E2D3D d-flex align-items-stretch justify-content-lg-start justify-content-md-between justify-content-between"
            >
                <div className="col-lg-4 col-md-10 col-10 p-3 d-flex align-items-center justify-content-between border-right-light-1E2D3D">
                    <p className="m-0 p-0 regular-txt txt-607B96">all-projects</p>
                    <RxCross2 size={18} color="607B96" />
                </div>

                <div onClick={onShowOffCanvasNav} className="pointer d-lg-none col-2 col-md-2 d-md-flex d-flex align-items-center justify-content-center">
                    <FaFolderOpen size={18} color="607B96" />
                </div>
            </div>

            <div className="overflow-lg-auto overflow-md-auto overflow-auto">
                <div className="px-lg-5 px-md-5 px-4 py-lg-4 py-md-4 py-4">
                    <div className="d-flex justify-content-start flex-wrap">
                        { displayProjects }
                    </div>
                </div>
            </div>            
        </div>
    )
}