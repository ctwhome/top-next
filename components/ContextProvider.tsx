import {createContext, useEffect, useState, useContext, useMemo} from 'react'
// import {ContextConsumerComponentName} from './ContextConsumer'

type Props = { className?: string };

// Create context to be imported in other components
export const MyContextName = createContext({
  // type definition
  value: '',
  setValue: (newValue) => newValue
})

/**
 * Wrapper component
 */
export const ContextProviderComponentWrapper = (props: Props) => {
  const [value, setValue] = useState('John Smith')
  const valueMemoization = useMemo(() => ({value, setValue}), [value])

  // Example using useEffect
  useEffect(() => {
    setTimeout(() => {
      setValue('Smith, John Smith')
    }, 2000)
  }, [])

  return (
    <div className={props.className}>

      <div className="text-xl font-bold mb-3">useContext example</div>
      <MyContextName.Provider value={valueMemoization}> {/* or pass {value, setValue} without memoization */}
        <ContextConsumerComponentName/>

        <UserNameInput/>

        {/* Other components ... */}
      </MyContextName.Provider>

    </div>

  )
}

function UserNameInput() {
  const {value, setValue} = useContext(MyContextName)
  const changeHandler = (event) => setValue(event.target.value)

  return <input type="text" value={value} onChange={changeHandler} className="text-black"/>
}
/**
 * Different component, can be on another file
 */
export const ContextConsumerComponentName = (props: Props) => {
  const {value, setValue} = useContext(MyContextName)

  return (
    <div className={props.className}>
      {value}

      <div className="btn btn-sm"
        onClick={() => setValue('My new Context value')}
      >
        ⬆ CHANGE PARENT CONTEXT
      </div>
    </div>

  )
}
