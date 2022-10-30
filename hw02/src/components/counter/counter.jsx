import React, { useState } from "react";
import "./counter.css"

const Counter = (props) => {
    var countStateVariable = useState(0)
    var setCount
    return (
        <div>
            {props.data.map((box, id) => {
                return (
                    <>
                    {box.count = countStateVariable[0]}
                    {setCount = countStateVariable[1]}
                        <div key={id} className="counterTile" >
                            <div className="text">
                                <h4>{box.name}</h4>
                                <h4>{box.count}</h4>
                            </div>
                            <button className="button" onClick={() => setCount(box.count + 1)}>
                                <h3>+1</h3>
                            </button>
                        </div>
                    </>
                )
            }
            )}
        </div>
    )
}
export default Counter;
