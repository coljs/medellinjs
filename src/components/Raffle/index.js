import React from 'react';
import jsonp from 'jsonp';

export default class Raffle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attendees: [],
      loaded: false,
      error: false
    }
  }

  renderWinner() {
    return this.state.attendees[Math.floor(Math.random() * (this.state.attendees.length))];
  }

  componentDidMount() {
    jsonp('https://api.meetup.com/medellinjs/events?photo-host=public&page=20&sig_id=157972512&status=upcoming&sig=d729106605afbda5f2f3b2cdd2af1c7dfe7be301', null, (error, response) => {
      if(error) {
        this.setState({ error });
      } else {
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
    })
  }

  render() {
    const { loaded, error } = this.state;
    return (
      <div>
      {loaded &&
        this.renderWinner()
      }
      {error &&
        error
      }
      </div>
    );
  }
}
