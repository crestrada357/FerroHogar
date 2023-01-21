import { useState } from 'react'
import './App.css'
import './styles/Logo.css'
import './styles/Search.css'
import './styles/Item.css'
import { Logo } from './components/Logo'
import { Search } from './components/Search'
import {ItemList} from './components/ItemList'
import { Item } from './components/Item'
import { initialObjects } from './assets/InitialObjects.js'

function App() {
  const [initialObj, setInitialObj]=useState(initialObjects);
  return (
    <div className="app">
      <Logo/>
      <Search/>
      <ItemList>
      {initialObj.map(obj=>(
                <Item
                    key={obj.key}
                    category={obj.category}
                    description={obj.description}
                />
                ))}
      </ItemList>
    </div>
  )
}

export default App
