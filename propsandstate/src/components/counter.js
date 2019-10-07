import React from "react";
import Cardbody from "./Cardbody";

const Styles = {
    card: {
        width: "50%",
        backgroundColor: "green",
        margin: "0 auto",
        marginTop: "20%"
    },
    header: {
    
        backgroundColor:"yellow"
    }
};
class Counter extends React.Component {

    state = {
        count: 0
    };

    handleincrement = () => (
        this.setState({ count: this.state.count + 1 })
    )

    render() {

        return (
            <div className="card text-center" style={Styles.card}>
                <div className="card-header" style={Styles.header}>
                    <h1>Count:{this.state.count}</h1>
                </div>
                <div className="card-body">
                    <Cardbody handleincrement={this.handleincrement} />
                </div>
            </div>


        )

    };

}
export default Counter;