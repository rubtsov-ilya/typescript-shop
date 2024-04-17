import React, { FC, createContext, useEffect, useState } from 'react'
import { IValue } from '../interfaces/DarkThemeValue.interface'

interface DarkThemeProviderProps {
  children: React.ReactNode
}

export const darkThemeContext = createContext<IValue | null>(null)

const DarkThemeProvider: FC<DarkThemeProviderProps> = ({ children }) => {
  const bodyTag = document.querySelector('body') as HTMLBodyElement
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkTheme(true)
    } else if (theme === 'light') {
      setIsDarkTheme(false)
    } else {
      return
    }
  }, [])

  useEffect(() => {
    if (isDarkTheme) {
      bodyTag.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else if (!isDarkTheme) {
      bodyTag.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkTheme])

  const changeDarkThemeState = () => { 
    setIsDarkTheme((prev) => !prev)
   }

  const value: IValue = { isDarkTheme, changeDarkThemeState }
  // получение в компонентах
  // const {isDarkTheme, changeDarkThemeState} = useDarkTheme()
  return (
    <darkThemeContext.Provider value={value}>
      {children}
    </darkThemeContext.Provider>
  )
}

export default DarkThemeProvider