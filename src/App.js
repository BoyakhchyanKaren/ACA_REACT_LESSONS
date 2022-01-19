import './App.css';
import {useState} from "react";

function App() {
    const people = [
        {name:"Obama", age:"60", country:"USA", vote:0},
        {name:"John", age:"55", country:"USA", vote:0},
        {name:"Vashington", age:"65", country:"USA", vote:0},
        {name:"Tramp", age:"70", country:"USA", vote:0},
    ];
    let [candidates, setCandidates] = useState(people);
    let [text, setText] = useState("");
    let handleClick = () => {
        for (let i = 0; i < candidates.length; i++) {
            if(candidates[i].name.includes(text)){
                candidates[i].vote++;
                setCandidates([...candidates]);
            }else{
                setCandidates(candidates)
            };
        }
    };
    return (
        <>
            <h1>Elections</h1>
            <div className="btn-label-container">
                <form className="form-container">
                    <div>
                        <label htmlFor="for-name">Candidate name</label>
                        <input
                            value={text}
                            id="for-name"
                            className="inp"
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => {
                                handleClick();
                                setText("")
                            }}
                        >
                            Vote
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        candidates.map((candidate, indexCandidate) => {
                            return (
                                <tr key={indexCandidate}>
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
        </>
    )
};

export default App;
