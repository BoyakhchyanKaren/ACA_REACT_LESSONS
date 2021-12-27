import {useState} from "react";
const colors = ["red", "blue", "green", "goldenrod", "rebeccapurple", "yellow", "purple", "saddlebrown", "aqua"];
function RandomColors () {
    const [color, setColor] = useState(colors);
    let changeColor = () => {
        const rand = Math.round(Math.random() * colors.length);
        setColor(colors[rand]);
    }
    return (
        <div style={{
            backgroundColor:color,
        }}
        className="div-random"
        >
            <h1>Random colors page</h1>
            <button onClick={() => {
                changeColor();
            }}>
                Click
            </button>
        </div>
    )
};
export default RandomColors;