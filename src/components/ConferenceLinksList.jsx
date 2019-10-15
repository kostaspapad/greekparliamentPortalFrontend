import React from "react";
import {Link} from 'react-router-dom'

class ConferenceLinksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      // Get speech data for conference
      componentDidMount() {
          fetch("https://greekparliament.info/api/v1/conferences")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result.data
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
          )
      }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (
                <ul>
                  {items.map(item => (
                    <li key={item.id} style={{ listStyleType: "none" }}>
                        <Link to={`/conference/${item.conference_date}/speeches`}>{item.conference_date}</Link>
                    </li>
                  ))}
                </ul>
            );
        }
    }
}

export default ConferenceLinksList