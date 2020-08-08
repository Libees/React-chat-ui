import {useState} from  "react"

function useColorSwitch(preColor="#ff0000",nextColor="#00ff00"){
  const [color, setColor] = useState(preColor);

  const handleColor=()=>{
    setColor(nextColor)
  }

  return[color,handleColor]
}

export default useColorSwitch