import React, {useEffect, useState} from 'react';
import './message.css' // don't do default import or it messes all the other css for some reason
import {ChatBox} from 'react-chatbox-component';
import axios from "axios";

const Messages = (props) => {
    let blankMessage = {
        "text": "",
        "id": "",
        "sender": {
            "name": "admin",
            "uid": "admin",
            "avatar": "https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg"
        }
    }
    const admin = {
        "uid": "admin"
    }
    const [messages, setMessages] = useState(blankMessage)
    let [length, setLength] = useState(0);

    function handleSubmit(event) {
        console.log(event);
        axios.post(`http://localhost:8080/api/v1/admin/messages/${props.id}`, {message: event})
            .then((r) => {
                if (r.status === 200) {
                    let temp = messages;
                    let tempMess = blankMessage;
                    tempMess.text = event;
                    temp.push(tempMess);
                    setMessages(temp);
                    setLength(length += 1)
                }
            })
            .catch((err) => console.log(err))

    }

    function fetchMessages() {
        fetch(`./JSON/messages${props.id}.json`)
            .then((response) => response.json())
            .then((json) => setMessages(json.messages))
            .catch((err) => console.log(err))
        setLength(messages.length + 1)
    }

    useEffect(() => {
        setMessages(blankMessage) // clear for each reservation
        fetchMessages()
        // updates every minute after loading first time or when id changes
        const interval = setInterval(() => {
            fetchMessages()
        }, 60000) // minute
        return () => clearInterval(interval)
    }, [props.id, length]);


// useEffect(() => {
//     fetch(`http://localhost:8080/api/v1/admin/messages/${props.id}`)
//         .then((t) => console.log('loading' + props.id))
//         .then((response) => response.json())
//         // .then((json) => console.log(json.messages))
//         .then((json) => setMessages(json.messages))
//         .catch((err) => console.log(err))
// }, [props.id])


    return (
        <ChatBox messages={messages} user={admin} onSubmit={event => handleSubmit(event)}/>
    )
}

export default Messages;