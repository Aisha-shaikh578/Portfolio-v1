import { Circle } from 'lucide-react'
import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeEditor = () => {
  const code = `const Developer = () => {
  return (
    <div className="me">
      <h1>Building Web Apps</h1>
      <p>Full Stack Dev..</p>
    </div>
  )
};`

  return (
    <div className='w-full' aria-label='Developer code preview'>
      <div className='relative md:w-md 2xl:w-xl overflow-hidden -mx-2 rounded-2xl border border-[#315e45] bg-[#0b1510] shadow-[0_18px_45px_rgba(23,67,40,0.16)]'>
        <div className='flex h-12 items-center justify-between border-b border-[#315e45] bg-[#143022] px-4'>
          <div className='flex gap-2'>
            <Circle color='#ff6b6b' fill='#ff6b6b' size={12}/>
            <Circle color='#f7c948' fill='#f7c948' size={12}/>
            <Circle color='#62c370' fill='#62c370' size={12}/>
          </div>
          <span className='text-s font-medium tracking-wide text-[#a8bdae]'>
            aisha.jsx
          </span>
          <div className='w-10' aria-hidden='true' />
        </div>

        <SyntaxHighlighter language='jsx' style={nightOwl} showLineNumbers wrapLongLines customStyle={{
          background: '#0B1510',
          margin: '0',
          padding: '26px 10px 20px 6px',
          fontSize: 'clamp(0.9rem, 1.5vw, 0.9rem)',
          minHeight: '260px',
          height: '260px',
          overflow: 'hidden'
        }} lineNumberStyle={{
          color: '#42634d',
          minWidth: '2.15em',
        }}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeEditor
