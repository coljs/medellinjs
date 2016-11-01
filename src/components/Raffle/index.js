import React from 'react';
import jsonp from 'jsonp';


const ShowWinner = ({winner}) => (
  <p>{winner}</p>
)

const ShowError = ({error}) => (
  <div>
    {error}
  </div>
)

const ShowButton = ({onClick}) => (
  <button onClick={onClick}>{"Get a Winner!"}</button>
)

export default class Raffle extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      attendees: [],
      loaded: false,
      error: false,
      winner: ""
    }
  }

  handleClick() {
    const { attendees } = this.state;
    const index = Math.floor(Math.random() * attendees.length);
    const winner = attendees.splice(index, 1)[0];

    this.setState({
      attendees,
      winner
    });
  }

  componentDidMount() {
    jsonp('https://api.meetup.com/medellinjs/events?photo-host=public&page=20&sig_id=157972512&status=upcoming&sig=d729106605afbda5f2f3b2cdd2af1c7dfe7be301', null, (error, response) => {
      if(error) {
        this.setState({ error });
      } else {
        if(response.data.length !== 0) {
          const { id } = response.data[0];
          jsonp(`https://api.meetup.com/medellinjs/events/${id}/rsvps?photo-host=public&sig_id=157972512&response=yes&sig=035ca860db7018da8e1a7366578ac5bcb1e02627`, null, (error, response) => {
            if(error) {
              this.setState({ error });
            } else {
              const attendees = response.data.map((attendee) => attendee.member.name);

              this.setState({ attendees, loaded: true })
            }
          })
        }
        this.setState({
          error: 'No hay evento :(',
          loaded: true
        })
      }
    })
  }

  showRaffle() {
    const { winner, error } = this.state;
    return (
      <div>
        {!error && <ShowButton onClick={this.handleClick} /> }
        {winner ? <ShowWinner winner={winner} /> : ''}
      </div>
    )
  }

  render() {
    const { loaded, error } = this.state;
    return (
      <div>
        {loaded ? this.showRaffle() : 'Cargando...'}
        {error && <ShowError error={error} />}
      </div>
    );
  }
}
