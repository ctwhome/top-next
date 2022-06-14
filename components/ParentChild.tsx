import {useState} from 'react'

export const Child = (props) => {
  const [searchTerm, setSearchTerm] = useState()
  const handleChange = event => {
    setSearchTerm(event.target.value)
    props.onSearch(event)
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for: <strong>{searchTerm}</strong>.
      </p>
    </div>
  )
}

export const Parent = (props) => {
  const handleSearch = event => console.log(event.target.value)
  return(
    <Child onSearch={handleSearch} />
  )

}
