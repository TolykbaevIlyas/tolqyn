import { IInput } from "./model/types"

export default function MyInput({value, onChange, type, placeholder}:IInput) {
  return (
    <input className=" w-60 h-8 shadow-md rounded-md p-4" value={value} onChange={(e)=>onChange(e.target.value)} type={type} placeholder={placeholder}/>
  )
}
