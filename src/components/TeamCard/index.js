import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-card">
      <img src={teamImageUrl} alt={id} className="team-icon" />
      <p className="team-heading">{name}</p>
    </Link>
  )
}

export default TeamCard
