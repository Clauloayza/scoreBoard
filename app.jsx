//react

let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Application = ({title, players}) => {
   return (
     <div className="container scoreboard">
        <Header players={players}/>
        <PlayerList players={players}/>
        <PlayerForm />  
     </div>
  );
}

const Header = ({players}) => {
  return(
      <header className="header">
        <table className="stats">
            <tr>
              <td>PLAYERS:</td>
              <td>{players.length}</td>
            </tr>
            <tr>
              <td>TOTAL POINTS:</td>
              <td>{AllPoints(players)}</td>
            </tr>
        </table>
        <div className="scoreTitle">SCOREBOARD</div>
        <div className="stopwatch">
            <h2>STOPWATCH</h2>
            <h1 className="stopwatch-time">0</h1>
            <button>start</button>
            <button>reset</button>
        </div>
      </header>
  );
}

function AllPoints(players){
  return players.map(player => player.score).reduce((a, b) => a + b);
}

const PlayerList = ({players}) => {
  return (
    <div>
      {
        players.map((e) => {
          return <div className='player' key={e.name}>
            <div className='player-name'>{e.name}</div>
            <div className='player-score counter'>
              <button className='counter-action decrement'>-</button>
              <span className='counter-score'>{e.score}</span>
              <button className='counter-action increment'>+</button>
            </div>
          </div>
        })
      }
    </div>
  );
}

const PlayerForm = () => {
  return (
    <div className="add-player-form">
      <form action="">
        <input type="text" placeholder="Enter a name"/>
        <input type="submit" placeholder="Add Player"/>
      </form>
    </div>
  )
}

ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>,
 document.getElementById('container'));



