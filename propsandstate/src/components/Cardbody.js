import React from "react";

function Cardbody(props) {

    return (
        <>
            <button className="btn btn-info" onClick={props.handleincrement}>
                Increment
</button>
        </>
    )
}
export default Cardbody;