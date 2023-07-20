import hljs from 'highlight.js';
import {marked} from 'marked';
import {useEffect} from "react";

export default function Markdown({children}){

    useEffect(() => {
        hljs.highlightAll()
    },[])

    return (
        <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{__html: marked(children)}}/>
    )
}
