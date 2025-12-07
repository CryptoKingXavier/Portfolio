import React from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../auxiliary/projectsData";
import { RxCross2 } from "react-icons/rx";
import { GoArrowUp, GoArrowUpRight } from "react-icons/go";
import { FaFolderOpen } from "react-icons/fa";
import FloatingBtn from "../../CustomBtns/FloatingBtn";


export default function SingleProject({ onShowOffCanvasNav }){

    const params = useParams()

    const { name } = params

    const project = projectData.filter(project => project.name == name)[0]

    if(project){

        const { name, Logo, projectStacks, description, previewLink, type } = project

        const viewLiveProject = () => {
            if(previewLink){
                window.open(previewLink, '_blank', 'noopener')
            
            } else{
                if(type == 'app'){
                    alert('Download app on playstore')
                }
            }

            return
        }

        const displayProjectStacks = projectStacks.map((stack, i) => {
            const { name, Icon } = stack

            return (
                <div
                    key={i}
                    className="col-lg-3 col-md-4 col-5 d-flex flex-column align-items-center justify-content-center mb-4"
                >
                    <div className="mb-2">
                        <Icon />
                    </div>
                    <h2 className="m-0 p-0 medium-txt txt-607B96 text-center">{name}</h2>
                </div>
            )
        })

        return (
            <div
                style={{ maxHeight: '80vh', minHeight: '80vh', overflowY: 'auto' }}
                className="w-100 h-100 d-flex flex-column justify-content-stretch"        
            >
                <div 
                    className="border-bottom-light-1E2D3D border-right-light-1E2D3D d-flex align-items-stretch justify-content-lg-start justify-content-md-between justify-content-between"
                >
                    <div className="col-lg-4 col-md-10 col-10 p-3 d-flex align-items-center justify-content-between border-right-light-1E2D3D">
                        <p className="m-0 p-0 regular-txt txt-607B96">{name}</p>
                        <RxCross2 size={18} color="607B96" />
                    </div>
    
                    <div onClick={onShowOffCanvasNav} className="pointer d-lg-none col-2 col-md-2 d-md-flex d-flex align-items-center justify-content-center">
                        <FaFolderOpen size={18} color="607B96" />
                    </div>
                </div>
    
                <div className="h-100 w-100">
                    <div className="px-lg-5 px-md-5 px-4 h-100 w-100">
                        <div className="w-100 py-4">
                            <div className="w-100 h-100 p-4 d-lg-block d-md-block d-flex flex-column align-items-center justify-content-center">
                                <h4 className="m-0 p-0 regular-txt txt-607B96 text-lg-start text-md-start text-center mb-4">This project was developed using the following stacks</h4>
                                <div className="mb-5 d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-center flex-wrap">
                                    { displayProjectStacks }
                                </div>
                                <div className="d-flex align-items-start justify-content-start">
                                    {
                                        type == 'app'
                                        ?
                                            <p className="m-0 p-0 extra-small-txt txt-607B96">App available on PlayStore</p>
                                        :
                                            <div onClick={viewLiveProject} className="pointer bg-1C2B3A p-2 rounded-3 d-flex align-items-center justify-content-between">
                                                <p className="m-0 p-0 mx-1 extra-small-txt txt-FFF">Live preview</p>
                                                <div className="mx-1">
                                                    <GoArrowUpRight size={18} color="fff" />
                                                </div>
                                            </div>                                        
                                    }                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div> 

                {/* <div className="d-lg-none d-md-none d-block">
                    <FloatingBtn icon="link" btnFunc={viewLiveProject} />
                </div>            */}
            </div>
        )
    }

    return <></>
}