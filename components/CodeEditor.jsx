import { Circle } from 'lucide-react'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeEditor = () => {

  return (
   <>
    <div className='bg-[#143022] flex gap-2 p-3 rounded-tl-2xl rounded-tr-2xl'>
      <Circle color='red' fill='red' size={16}/>
      <Circle color='yellow' fill='yellow' size={16}/>
      <Circle color='green' fill='green' size={16}/>
    </div>

    <div>
      <SyntaxHighlighter language='jsx' style={nightOwl} customStyle={{
        background: '#0F1A14',
        paddingRight: '15px',
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        margin: '0',
        paddingTop: '0'
      }}>
 {`
 const Developer = () => {
  return (
   <div className='me'>
     <h1>Building Web Apps</h1>
     <p>Full Stack Dev..</p>
   </div>
  )
 };
 `}
   
      </SyntaxHighlighter>
    </div>
   </>
  )
}

export default CodeEditor
