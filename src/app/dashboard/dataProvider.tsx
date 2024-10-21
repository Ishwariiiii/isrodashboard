"use client"
import axios from "axios"
import { createContext, useState, ReactNode, FC, useContext } from "react"

interface ContextDataTypes {
    data: any
    loading: boolean
    error: string | null

    spacecraft: () => void
    satellites: () => void
    launchers: () => void
    centers: () => void
}
const ContextData = createContext<ContextDataTypes | null>(null)

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const spacecraft = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://isro.vercel.app/api/spacecrafts")
            // console.log(response.data.spacecrafts)
            setData(response.data.spacecrafts)
        } catch (err) {
            setError("An unknown error occure")
        } finally {
            setLoading(false)
        }
    }
    const satellites = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://isro.vercel.app/api/customer_satellites")
            // console.log(response.data)
            setData(response.data.customer_satellites)
        } catch (err) {
            setError("An unknown error occure");
        } finally {
            setLoading(false)
        }
    }
    const launchers = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://isro.vercel.app/api/launchers")
            // console.log(response, "Launcher data");
            setData(response.data.launchers)
        } catch (err) {
            setError("An unknown error occure")
        } finally {
            setLoading(false)
        }
    }
    const centers = async () => {
        try {
            setLoading(true)
            const response = await axios.get("https://isro.vercel.app/api/centres")
            // console.log(response, "Center data")
            setData(response.data.centres)
        } catch (err) {
            setError("An unknown error occure");
        } finally {
            setLoading(false);
        }
    }
    return (
        <ContextData.Provider value={{ data, loading, error, spacecraft, satellites, launchers, centers, }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextProvider

export const useDataContext = () => {
    const context = useContext(ContextData)
    if (!context) {
        throw new Error("useDataContext must be used within a ContextProvider")
    }
    return context
}   