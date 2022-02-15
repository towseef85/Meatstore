import React, { useRef, useEffect } from "react";
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css';

export default function AddBlogs(props: any) {
    const editor = useRef<SunEditorCore>();
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };

    const handleClick = (event: any) =>{
        console.log(event)
    }
    return (
        <div style={{marginTop:'80px'}}>
        
        <SunEditor getSunEditorInstance={getSunEditorInstance} onClick={handleClick} />
        </div>
    )
}
