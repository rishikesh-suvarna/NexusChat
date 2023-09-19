"use client"

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react"

export const ModalProvoider = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <>
            <CreateServerModal />        
        </>
    )
}