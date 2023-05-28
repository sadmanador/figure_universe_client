import { useEffect } from "react"

export const useTitle = title => {
    useEffect(() => {
      document.title = `Figure Universe | ${title}`
    }
    ,[title])
}