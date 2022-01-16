import { useState } from 'react';
import './App.css';

function App() {
  let initialState = [
    {name:"Obama", age:"60", country:"USA", vote:0},
    {name:"John", age:"55", country:"USA", vote:0},
    {name:"Vashington", age:"65", country:"USA", vote:0},
    {name:"Tramp", age:"70", country:"USA", vote:0},
  ];
  const def = {name:"", vote:0}
  let [vote, setVote] = useState(def);
  let [candidates, setCanditates] = useState(initialState);
  let changeVote = () => {
    switch(vote.name){
      case "Obama":
        let candidate1 = candidates.find(el => el.name === vote.name);
        candidate1.vote++;
        setCanditates([...candidates]);
        setVote(def);
        break;
      case "John":
        let candidate2 = candidates.find(el => el.name === vote.name);
        candidate2.vote++;
        setCanditates([...candidates]);
        setVote(def);
        break;
      case "Vashington":
        let candidate3 = candidates.find(el => el.name === vote.name);
        candidate3.vote++;
        setCanditates([...candidates]);
        setVote(def);
        break;
      case "Tramp":
        let candidate4 = candidates.find(el => el.name === vote.name);
        candidate4.vote++;
        setCanditates([...candidates]);
        setVote(def);
        break;
      default:
        console.log("A");     
      }
    };
  return (
    <>
      <div className="App">
        <div>
          <h1>Elections</h1>
        </div>
        <div className='inp-btn'>
          <div className='inp2'> 
            <label>Candidate Name</label>
            <input 
            type="text"
            value={vote.name}
            onChange={(e) => setVote({...vote, name:e.target.value})}
            />
          </div>
          <button
            onClick={changeVote}
          >Vote</button>
        </div> 
        <div className='table-div'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {
                candidates.map((candidate, canditateIndex) =>{
                  return (
                    <tr key={canditateIndex}>
                      <td>{candidate.name}</td>
                      <td>{candidate.age}</td>
                      <td>{candidate.country}</td>
                      <td>{candidate.vote}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
