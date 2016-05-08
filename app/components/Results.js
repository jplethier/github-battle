var React = require('react')
var PropTypes = React.PropTypes
var Link = require('react-router').Link
var styles = require('../styles')
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')
var MainWrapper = require('./MainWrapper')

function StartOver(props) {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

function Results(props) {
  if(props.isLoading === true) {
    return (
      <p>LOADING!</p>
    )
  }

  if(props.scores[0] === props.scores[1]) {
    return (
      <MainWrapper>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainWrapper>
    )
  }

  var winnerIndex = props.scores[0] > props.scores[1] ? 0 : 1
  var loserIndex = winnerIndex === 1 ? 0 : 1
  return (
    <MainWrapper>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper title="Winner">
          <UserDetails score={props.scores[winnerIndex]} info={props.playersInfo[winnerIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper title="Loser">
          <UserDetails score={props.scores[loserIndex]} info={props.playersInfo[loserIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainWrapper>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results
