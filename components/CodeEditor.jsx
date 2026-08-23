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
    <div className='relative max-w-sm'>
      <div className='relative overflow-hidden rounded-xl border border-[#315e45] bg-[#0b1510]'>
        <div className='flex items-center justify-between border-b border-[#315e45] bg-[#143022] px-4 py-3'>
          <div className='flex gap-2'>
            <Circle color='#ff6b6b' fill='#ff6b6b' size={12}/>
            <Circle color='#f7c948' fill='#f7c948' size={12}/>
            <Circle color='#62c370' fill='#62c370' size={12}/>
          </div>
        </div>

        <SyntaxHighlighter language='jsx' style={nightOwl} showLineNumbers wrapLongLines customStyle={{
          background: '#0B1510',
          margin: '0',
          padding: '22px 18px 24px 10px',
          fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
          height: '240px'
        }} lineNumberStyle={{
          color: '#42634d',
          minWidth: '2.25em',
        }}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeEditor
