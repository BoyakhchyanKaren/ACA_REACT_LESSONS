import "../App.css";
import React from "react";
import {useState} from "react";
const lists = [
    "Wake up at 07:00.",
    "Leave for a work at 08:30.",
    "Meeting at 11:00.",
    "12:00-13:00 lunchtime.",
    "18:15 shopping at the nearby grocery.",
    "Dinner with friends at 19:20.",
    "Finish freelance work until 01:00."
];
function Lists() {
    const [list, setList] = useState(lists);
    let deleteList = (INDEX) => {
        const newList = list.filter((el,index) => index !== INDEX);
        setList(newList);
    }
    return (
        <div>
            <ol className="list-ul">
                {list.map((el,listIndex) => {
                    return (
                        <React.Fragment key={listIndex}>
                            <li
                                onClick={() => deleteList(listIndex)}
                            >{el}</li>
                        </React.Fragment>
                    )
                })}
            </ol>
        </div>
    )                                     
};
export default Lists;