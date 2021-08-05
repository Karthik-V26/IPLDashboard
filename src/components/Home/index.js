import {Component} from 'react'

import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teams: [],
    loading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamData = data.teams
    const formattedData = teamData.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teams: formattedData, loading: false})
  }

  render() {
    const {teams, loading} = this.state
    return (
      <div className="home-bg">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-icon"
            alt="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {loading ? (
          <div testid="loader" className="loading-container">
            <Loader
              type="BallTriangle"
              color="#ffffff"
              height={80}
              width={80}
            />
          </div>
        ) : (
          <ul className="teamCards">
            {teams.map(each => (
              <TeamCard key={each.id} teamDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
