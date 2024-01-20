import { useState, useMemo, createContext } from "react"

import { ProtectedRoute } from "../../components/ProtectedRoute"

import { IRoute } from "../../dtos/router.dto"
import { IRouterContext } from "./dto"

interface IProps {
  routes: IRoute[]
  startPage?: string
}

export const routerContext = createContext({} as IRouterContext)

export function SimpleRouter({ routes, startPage }: IProps) {
  const [paths, setPaths] = useState<IRoute[]>([])
  
  const [currentPage, setCurrentPage] = useState(startPage ?? routes[0].path)
  const Page = useMemo(() => routes.find(route => route.path === currentPage), [currentPage])

  function addToPaths(page: IRoute | undefined) {
    if (!page) return

    setPaths([...paths, page])
  }

  function removeLastPath() {
    if (paths.length === 0) return

    setPaths(paths.slice(0, paths.length - 1))
  }

  function navigate(path: string) {
    addToPaths(Page)
    setCurrentPage(path)
  }

  function goBack() {
    const lastPage = paths[paths.length - 1]

    if (!lastPage) return

    removeLastPath()
    setCurrentPage(lastPage.path)
  }

  return (
    <routerContext.Provider value={{
      navigate,
      goBack
    }}>
      {Page?.protected ? (
        <ProtectedRoute navigate={navigate}>
          {Page?.component}
        </ProtectedRoute>
      ) : Page?.component}
    </routerContext.Provider>
  )
}