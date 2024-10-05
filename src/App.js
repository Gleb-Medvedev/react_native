import { useState } from "react";


function Square() {

    const [value, setValue] = useState(null);

    function clickHandler() {
        value === "X" ? setValue(null) : setValue("X")
    }
    
    return <button className="square" onClick={clickHandler}>{value}</button>
}



// function Square({ value }) {
//     function handleClick() {
//       console.log('clicked!');
//     }
  
//     return (
//       <button
//         className="square"
//         onClick={handleClick}
//       >
//         {value}
//       </button>
//     );
//   }


export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
};
  