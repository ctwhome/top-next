import {useState} from 'react'

type Props = {
  className: string
};

export const UseState = (props: Props) => {
  const [count, setCount] = useState(0)


  return (
    <div className={props.className}>
      <div className="text-xl font-bold mb-3">useState example</div>

      <div className="flex gap-5">
        <div className="btn" onClick={() => setCount(count - 1)}>-</div>
        <div>{count}</div>
        <div className="btn" onClick={() => setCount(count + 1)}>+</div>
      </div>
    </div>
  )
}

