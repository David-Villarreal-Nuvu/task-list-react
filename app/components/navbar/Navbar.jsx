'use client'

import React, { useEffect, useState } from "react";
import Container from "../Container";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {

	const pathname = usePathname()
  const router = useRouter()
  const [tittle, setTitle] = useState("")
  const currentUser = JSON.parse(localStorage.getItem('user'))

	useEffect(() => {
		switch (pathname) {
			case "/task-list":
				return setTitle("Lista de tareas")
			case "/login":
				return setTitle("Inicio de sesión")
			default:
				break;
		}
	}, [pathname])
	
  return (
    <div
      className="
        sticky top-0 bg-blue-200 z-30 shadow-sm
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0 text-black">
            <p className=" font-bold text-xl ml-4">{tittle}</p>

            {
              currentUser ? 
                <a className="hover:text-blue-700 cursor-pointer mr-4" onClick={() => {localStorage.removeItem("user"), router.push("/login")}}>Cerrar sesión</a> 
              : 
                <a className="hover:text-blue-700 cursor-pointer mr-4" onClick={() => router.push("/login")}>Ingresar</a>
            }
            
          </div>
        </Container>
      </div>
    </div>
  );
}
