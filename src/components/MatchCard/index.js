import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = recentMatchesDetails

  return (
    <li className="match-card-bg">
      <img
        src={competingTeamLogo}
        className="match-team-logo"
        alt={competingTeam}
      />
      <p className="match-team-name">{competingTeam}</p>
      <p className="match-details-card">{result}</p>
      {matchStatus === 'Won' ? (
        <p className="won-text">Won</p>
      ) : (
        <p className="loss-text">Lost</p>
      )}
    </li>
  )
}

export default MatchCard
