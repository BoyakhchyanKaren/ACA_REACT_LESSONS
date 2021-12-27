import React, {useState} from "react";
import "../App.css";


function Dashboard() {
    const [text, setText] = useState("");
    const [style, setStyle] = useState({
        fontWeight:"",
        fontStyle:"",
        textDecoration:"",
        textTransform:"",
        color:"",
    });
    const [checkWeight, setCheckWeight] = useState(true);
    const [checkStyle, setCheckStyle] = useState(true);
    const [checkDecoration, setCheckDecoration] = useState(true);
    const [checkTransform, setCheckTransform] = useState(true);
    const [checkRed, setCheckRed] = useState(true);
    const [checkGreen, setCheckGreen] = useState(true);
    return (
        <div className="container">
            <textarea value={text} style={style}/>
            <div className="btn-container">
                <button onClick={() => {setStyle(checkWeight ? {...style, fontWeight: "bold"} : {...style, fontWeight: "normal"}); setCheckWeight(!checkWeight)}}>B</button>
                <button onClick={() => {setStyle(checkStyle ? {...style, fontStyle:"italic"} : {...style, fontStyle: "normal"}); setCheckStyle(!checkStyle)}}>i</button>
                <button style={{textDecoration:"line-through"}} onClick={() => {setStyle(checkDecoration ? {...style, textDecoration:"line-through"} : {...style, textDecoration: "none"}); setCheckDecoration(!checkDecoration)}}>abc</button>
                <button style={{textDecoration:"underline"}} onClick={() => {setStyle(checkDecoration ? {...style, textDecoration:"underline"} : {...style, textDecoration:"none"}); setCheckDecoration(!checkDecoration)}}>abc</button>
                <button onClick={() => {setStyle(checkTransform ? {...style, textTransform:"capitalize"} : {...style, textTransform: "none"}); setCheckTransform(!checkTransform)}}>Abc</button>
                <button style={{backgroundColor:"#e84a5f"}} onClick={() => {setStyle(checkRed ? {...style, color:"red"} : {...style, color:"black"}); setCheckRed(!checkRed)}}>Make me red</button>
                <button style={{backgroundColor:"#c5d86d"}} onClick={() => {setStyle( checkGreen ? {...style, color:"green"} : {...style, color:"black"}); setCheckGreen(!checkGreen)}}>Make me green</button>
            </div>
            <input className="dashboard-input" type="text" onChange={(e) => setText(e.target.value)}/>
        </div>
    )
};

export default Dashboard;