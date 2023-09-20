"use client"

import { useEffect, useState } from "react"

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { InviteModal } from "@/components/modals/invite-modal"
import { EditServerModal } from "@/components/modals/edit-server"

export const ModalProvoider = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <>
            <CreateServerModal />   
            <InviteModal />   
            <EditServerModal />
        </>
    )
}