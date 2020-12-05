import React from 'react'
import Roomfilter from './Roomfilter'
import Roomlist from './Roomlist'
import {withRoomConsumer} from '../context'
import Loading from './Loading'


function RoomContainer({context}) {
    const {loading,sortedRooms,rooms}=context

    if(loading){
        return<Loading/>
    }
    return (
        <>
        <Roomfilter rooms={rooms}/>
        <Roomlist rooms={sortedRooms}/>
        </>
    )
}


export default withRoomConsumer(RoomContainer);