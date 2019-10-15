import React from 'react';
import SpeechList from './SpeechList';

class Conference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      conferenceDate: this.props.match.params.conference_date,
      conferenceInfoDataIsLoaded: false,
      conferenceInfo: null
    };
  }
  componentDidMount() {
    // Load info about confernece
    this.getConferenceInfo()
  }
  getConferenceInfo() {
    fetch(`https://greekparliament.info/api/v1/conference/date/${this.props.match.params.conference_date}`)
      .then(res => res.json())
      .then(
        (result) => {
        this.setState({
          conferenceInfoDataIsLoaded: true,
          conferenceInfo: result.data
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          conferenceInfoDataIsLoaded: false,
          error
        });
      }
    )
  }
  render() {
    const { error, conferenceInfoDataIsLoaded, conferenceDate } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!conferenceInfoDataIsLoaded) {
      return <div>Loading conference data...</div>;
    } else {
      return (
        <ul>
          <p>{conferenceDate}</p>
          <SpeechList conferenceDate={conferenceDate}/>
        </ul>
      );
    }
  }
}

export default Conference;