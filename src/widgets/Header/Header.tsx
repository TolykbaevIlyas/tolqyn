import { UserIcon } from "@heroicons/react/24/outline"

interface IHeader {
  isOpen: boolean;
  setIsOpen: (isOpen:boolean)=>void;
}

export default function Header({setIsOpen, isOpen}:IHeader) {
    const navs = ['Главная', "Аниме", "Манга", "Новые Релизы"]
  return (
    <header className="bg-slate-100 p-5 flex items-center justify-between">
        <h2 className="p-3 bg-slate-300 cursor-pointer hover:opacity-70 transition">Logo</h2>
        <nav>
        <ul className="flex gap-4">
        {navs.map(nav=> (<li className="px-5 border border-slate-600 rounded-md cursor-pointer hover:shadow-lg transition">{nav}</li>))}
        </ul>
        </nav>
        <UserIcon width={30} className="cursor-pointer" onClick={()=>setIsOpen(!isOpen)}/>
    </header>
  )
}
