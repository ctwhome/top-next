import {useContext} from 'react'
import {MyContextName} from './ContextProvider'

type Props = {
  className?: string
};

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
