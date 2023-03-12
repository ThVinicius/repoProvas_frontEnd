import { useState, useContext, createContext } from 'react'

const TabContext = createContext()

export function TabProvider({ children }) {
  const [tab, setTab] = useState('DISCIPLINAS')

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  )
}

export const useTab = () => useContext(TabContext)
