'use client'
import { Modalform } from "@/features/Modalform";
import { Header } from "@/widgets/Header";
import { useState } from "react";


export default function Page() {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <>
    <Header setIsOpen={setIsOpen} isOpen={isOpen}/>
    {isOpen ? (<Modalform/>) : ""}
    </>
  )
}
