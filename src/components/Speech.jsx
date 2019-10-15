import React from 'react';
import { Link } from "react-router-dom"
function SpeechHeader(props) {
    return (
        <div>
            <Link to={{
                pathname: '/speech/' + props.speech_id,
                state: {
                    fromNotifications: true
                }
            }}>{props.speech_id}</Link>

            Speech ID: <Link to={`/speech/${props.speech_id}`}>{props.speech_id}</Link>
            Name: {props.greek_name}
            Image: {props.image}
        </div>
    );
}
function SpeechBody(props) {
    return (
        <div>
            Speech: {props.speech}
        </div>
    )
}
// function SpeechFooter(props) {
//     return (
//         <div>
            
//         </div>
//     )
// }
class Speech extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            speech_id: props.speech_id,
            speaker_id: props.speaker_id,
            missing_prev: props.missing_prev,
            on_behalf_of_id: props.on_behalf_of_id,
            speech: props.speech,
            image: props.image,
            greek_name: props.greek_name
        }
    }
    render() {
        return (
            <div>
                Name: {this.state.greek_name}
                Image: {this.state.image}
                Speech: {this.state.speech}
            </div>
        );
    }
}

export default Speech;