import { useState } from "react";


export default function Hello(){
  const myName:string = 'Jos'
  const [count, setCount] = useState('');
 

  const visible = false
  return <div className="bg-blue-300" >
    Hello {count} = {myName}

    { visible && 
      [{ title: '1' }, { title: '2' }, { title: '3' }].map((key, i) => <pre key={i}> {JSON.stringify(key)} </pre>)}
     
    <pre>
      {JSON.stringify({ title: '1' }, null, 2)}
  </pre>
    </div>
}