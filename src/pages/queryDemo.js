import React from "react";
import { useQuery } from "../hooks/useQuery";
import { Link, useRouteMatch } from "react-router-dom";

function QueryDemo() {
    const query = useQuery();
    const match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <ul>
                <li>
                    <Link to={match.url + "?test=first"}>first</Link>
                </li>
                <li>
                    <Link to={match.url + "?test=second"}>second</Link>
                </li>
            </ul>
            <p>test: {query.get("test")}</p>
        </div>
    );
}

export default QueryDemo;
