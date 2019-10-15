import React from 'react';

function PartyHeader(props) {
    return (
        <div>
            {props.fullname_el}
            {props.fullname_en}
            {props.image}
            {props.url}
        </div>
    );
}
// function PartyBody(props) {
//     return (
//         <div>

//       </div>
//     );
// }

// function PartyFooter(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

class Party extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        party_id: props.party_id,
        fullname_el: props.fullname_el,
        fullname_en: props.fullname_en,
        image: props.image,
        url: props.url,
      };
    }
    // Get data for party
    componentDidMount() {
        fetch(`http://127.0.0.1:8000/api/v1/party/${this.props.match.params.party_id}`)
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
              <PartyHeader 
                fullname_el={items.fullname_el}
                fullname_en={items.fullname_en}
                image={items.image}
                url={items.url}
              />
            //   <PartyBody
            
            //   />
            //   <PartyFooter
            
            //   />
            );
        }
    }
}


export default Party;