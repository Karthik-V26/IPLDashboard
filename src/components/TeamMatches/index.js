import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    lastMatch: [],
    loadingDet: true,
    recentMatches: [],
    teamUrl: '',
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchData = data.latest_match_details
    const formattedLatestMatchData = {
      umpires: latestMatchData.umpires,
      result: latestMatchData.result,
      manOfTheMatch: latestMatchData.man_of_the_match,
      id: latestMatchData.id,
      date: latestMatchData.date,
      venue: latestMatchData.venue,
      competingTeam: latestMatchData.competing_team,
      competingTeamLogo: latestMatchData.competing_team_logo,
      firstInnings: latestMatchData.first_innings,
      secondInnings: latestMatchData.second_innings,
      matchStatus: latestMatchData.match_status,
    }

    const teamBannerUrl = data.team_banner_url
    const matches = data.recent_matches
    const formattedRecentMatches = matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      lastMatch: formattedLatestMatchData,
      teamUrl: teamBannerUrl,
      recentMatches: formattedRecentMatches,
      loadingDet: false,
    })
  }

  render() {
    const {lastMatch, loadingDet, recentMatches, teamUrl} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-matches-bg ${id}`}>
        <img src={teamUrl} className="team-image" alt={id} />
        <p className="latest-matches-description">Latest Matches</p>
        {loadingDet ? (
          <div testid="loader" className="loading-contain">
            <Loader
              type="BallTriangle"
              color="#ffffff"
              height={80}
              width={80}
            />
          </div>
        ) : (
          <LatestMatch latestMatch={lastMatch} key={id} />
        )}
        {loadingDet ? (
          <div testid="loader" className="loading-contain">
            <Loader
              type="BallTriangle"
              color="#ffffff"
              height={80}
              width={80}
            />
          </div>
        ) : (
          <ul className="matches-cards">
            {recentMatches.map(each => (
              <MatchCard key={each.id} recentMatchesDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TeamMatches
