import React,{useState} from 'react'
import './index.css';
import bg from '../Image/bg-desktop.png'
import logo from '../Image/logo.svg'
import document from '../Image/icon-document.svg';
import folder from '../Image/icon-folder.svg';
import upload from '../Image/icon-upload.svg';
export default function DataStorage() {
    const [storage,setStorage]=useState(815)
    return (
        <div className="fylo-data-storage-component">
         <img
         src={bg}
         alt="bg"
         className="fylo-background"
         />
         <div className="fylo-main-component">
             <div className="fylo-main-sub-component">
                <img
                 src={logo}
                 alt="icon"
                 />
                 <div className="icons">
                     <span className="icon-1">
                     <img 
                     src={document}
                     alt="document"/>
                     </span>
                     <span className="icon-2">
                     <img 
                     src={folder}
                     alt="folder"/>
                     </span>
                     <span className="icon-3">
                     <img 
                     src={upload}
                     alt="upload"/>
                     </span>
                 </div>
             </div>
             <div className="fylo-range-component">
                
                 <p>You've used <span>{storage} GB</span> of your storage</p>
                 <div className="range-slider">
                 <input type="range" min={0} max={1000} value={storage} className="slider" onChange={(e)=>setStorage(e.target.value)}/>
                 </div>
                 <div className="indicators">
                     <p>
                         0 GB
                     </p>
                     <p>
                         1000 GB
                     </p>

                 </div>

                 <div className="data-indicator">
                     <p>{storage}<span> GB LEFT</span></p>
                </div>
                <span className="fylo-range-component-arrow"></span>
             </div>

         </div>
        </div>
    )
}
