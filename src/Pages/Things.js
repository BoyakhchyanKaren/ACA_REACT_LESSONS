import {useState} from "react";

const things = [
    {thing: "Wake up at 07:00.", style: ""},
    {thing: "Leave for a work at 08:30.", style: ""},
    {thing: "Meeting at 11:00.", style: ""},
    {thing: "12:00-13:00 lunchtime.", style: ""},
    {thing: "18:15 shopping at the nearby grocery.", style: ""},
    {thing: "Dinner with friends at 19:20.", style: ""},
    {thing: "Finish freelance work until 01:00.", style: ""}
];

function Things() {
    const [Thing, setThing] = useState(things);
    let change = (INDEX) => {
        console.log(INDEX)
        if (INDEX === 0) {
            const one = things.find((el, index) => index === INDEX);
            one.style= 'line-through'
            setThing([...Thing])
        };
        const prev = INDEX - 1;
        const two = things.find((el, index) => index === prev);
        if(two.style === "line-through"){
            const th = things.find((el,index) => index === INDEX);
            th.style = "line-through";
            setThing([...Thing])
        }else{
            setThing([...Thing]);
        }
    };
    return (
        <div>
            {Thing.map((el, index) => {
                return (
                    <ul>
                        <li
                            style={{
                                textDecoration: el.style
                            }}
                            onClick={() => change(index)}
                        >{el.thing}</li>
                    </ul>
                )
            })}
        </div>
    )
};
export default Things;