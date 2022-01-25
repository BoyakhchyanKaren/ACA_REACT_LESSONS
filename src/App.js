import './App.css';
import {useState} from "react";

function App() {

    let newCandidate = {name: "", age: 65, country: "USA", votes: 0};
    let [name, setName] = useState("");
    let [candidates, setCandidates] = useState([]);
    let handleClick = () => {
        if( name === "" || name === undefined ){
            setCandidates([...candidates]);
            return;
        }
        let checkCandidate = candidates.find(el => el.name === name);
        if(!checkCandidate){
            newCandidate.name = name;
            newCandidate.votes++
            setCandidates([...candidates, newCandidate]);
        }else{
            checkCandidate.votes++;
            setCandidates([...candidates]);
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
                            value={name}
                            id="for-name"
                            className="inp"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => {
                                handleClick();
                                setName("")
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
                                    <td>{candidate.votes}</td>
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

