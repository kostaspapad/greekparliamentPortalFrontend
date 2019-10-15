import React from 'react';
import Speech from './Speech';

/*
 * Component to render a list of SpeechComponent objects
 *
 */
class SpeechList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conferenceDate: props.conferenceDate,
            error: null,
            conferenceSpeechesIsLoaded: false,
            conferenceSpeeches: null
        }
    }
    componentDidMount() {
        this.getConferenceSpeechesByDate(this.state.conferenceDate)
    }
    getConferenceSpeechesByDate(conferenceDate) {
        fetch(`https://greekparliament.info/api/v1/conference/${conferenceDate}/speeches`)
          .then(res => res.json())
          .then(
            (result) => {
            this.setState({
              conferenceSpeechesIsLoaded: true,
              conferenceSpeeches: result.data
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              conferenceSpeechesIsLoaded: false,
              error
            });
          }
        )
      }
    render() {
        const { error, conferenceSpeechesIsLoaded, conferenceSpeeches } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!conferenceSpeechesIsLoaded) {
          return <div>Loading speeches...</div>;
        } else {
          return (
            <div>
                {conferenceSpeeches.map(item => (
                    <li key={item.name} style={{ listStyleType: "none" }}>
                    <Speech
                        fullname_el={item.fullname_el}
                        greek_name={item.greek_name}
                        image={item.image}
                        missing_prev={item.missing_prev}
                        on_behalf_of_id={item.on_behalf_of_id}
                        party_color={item.party_color}
                        speaker_id={item.speaker_id}
                        speech={item.speech}
                        speech_conference_date={item.speech_conference_date}
                        speech_id={item.speech_id}
                    />
                    </li>
                ))}
            </div>
        );
    }
}
}
export default SpeechList;