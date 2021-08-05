import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch

  return (
    <div className="latest-match-bg">
      <div className="team-details">
        <div className="match-venue-details">
          <p className="team-name">{competingTeam}</p>
          <div>
            <p className="match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
        </div>
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="team-logo-latest"
        />
      </div>
      <div>
        <p className="match-sub-details">First Innings</p>
        <p className="match-details-right">{firstInnings}</p>
        <p className="match-sub-details">Second Innings</p>
        <p className="match-details-right">{secondInnings}</p>
        <p className="match-sub-details">Man Of The Match</p>
        <p className="match-details-right">{manOfTheMatch}</p>
        <p className="match-sub-details">Umpires</p>
        <p className="match-details-right">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
