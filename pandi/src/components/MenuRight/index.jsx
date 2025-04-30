'use client'

import { useCallback, useEffect, useState } from "react"

export const MenuRight = () => {
  const [user, setUser] = useState(null)

  const fetchUser = useCallback(() => {
    const temp = localStorage.getItem('user') || 'null'
    const tempParse = JSON.parse(temp)
    setUser(tempParse)
  }, [setUser])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])
  return <>
    {user && <span>{user.name}</span>}
    {!user && <button className="px-8 py-2 outline-cyan-500 outline-1 rounded-lg cursor-pointer">Login</button>}
  </>
}

export default MenuRight