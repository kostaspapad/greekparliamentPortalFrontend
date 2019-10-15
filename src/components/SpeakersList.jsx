import React from "react";
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

function SpeakerListItem(props) {
  const classes = useStyles();

  let imgPath = "http://localhost:8000/img/" + props.image

  return (
      <div>
          <Avatar alt="Avatar" src={imgPath} className={classes.avatar} />
          <Typography variant="h6" gutterBottom>
            {props.party_fullname}
          </Typography>
          <Link to={`/speaker/${props.speaker_id}`}>{props.greek_name}</Link>
      </div>
  );
}

class SpeakersList extends React.Component {
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
          fetch("http://127.0.0.1:8000/api/v1/speakers")
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
                    <li key={item.speaker_id} style={{ listStyleType: "none" }}>
                      <SpeakerListItem
                        speaker_id={item.speaker_id}
                        greek_name={item.greek_name}
                        image={item.image}
                        party_fullname={item.party_fullname}
                      />
                    </li>
                  ))}
                </ul>
            );
        }
    }
}

export default SpeakersList