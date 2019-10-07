import React from "react";
import Cardbody from "./Cardbody";

class Counter extends React.Component {

    state = {
        count:0
    };

    handleincrement = () =>( 
        this.setState({ count: this.state.count + 1 })
    )

    render() {

        return (
            <div className="card">
                <div className="card-header">
                    <h1>count:{this.state.count}</h1>
                </div>
                <div className="card-body">
                    <Cardbody handleincrement={this.handleincrement} />
                </div>
            </div>


        )

    };

}
export default Counter;