import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const money = require("../assets/about-money.png");

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    render() {
        const { location } = this.props;
        return (
            <div>
                <p>You are now at {location.pathname}</p>
                <img src={money} alt="" style={{ width: "200px" }} />
            </div>
        );
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
export default withRouter(ShowTheLocation);
