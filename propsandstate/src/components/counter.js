import React from "react";

class Counter extends React.Component {

    state = {
        count=0
    };

    render() {

        return (
            <div className="card">
                <div className="card-header">
                    <h1>count:{this.state.count}</h1>
                </div>
                <div className="cardbody">

                </div>
            </div>


        )

    };

}