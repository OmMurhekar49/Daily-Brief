import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import Newsitem from "./components/Newsitem"

import{useState} from 'react';
const App = () => {
  const [category,setCategory]= useState("sports");
  return (
    
    <div>
     
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
     <Newsitem/>
    </div>
  )
}

export default App
