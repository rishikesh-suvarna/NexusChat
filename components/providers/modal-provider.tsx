"use client"

import { useEffect, useState } from "react"

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { InviteModal } from "@/components/modals/invite-modal"
import { EditServerModal } from "@/components/modals/edit-server"
import { MembersModal } from "@/components/modals/members-modal"
import { CreateChannelModal } from "@/components/modals/create-channel-modal"
import { LeaveServerModal } from "@/components/modals/leave-server-modal"
import { DeleteServerModal } from "@/components/modals/delete-server-modal"
import { DeleteChannelrModal } from "@/components/modals/delete-channel-moda"
import { EditChannelModal } from "@/components/modals/edit-channel-modal"
import { MessageFileModal } from "@/components/modals/message-file-modal"
import { DeleteMessageModal } from "@/components/modals/delete-message-modal"

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
            <MembersModal />
            <CreateChannelModal />
            <LeaveServerModal />
            <DeleteServerModal />
            <DeleteChannelrModal />
            <EditChannelModal />
            <MessageFileModal />
            <DeleteMessageModal />
        </>
    )
}