import React, { useState, useEffect } from "react";
import axios from "axios";

function Hits() {
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        async function fetchData() {
            const result = await axios("/api/v1/search?query=redux");
            setData(result.data);
        }
        fetchData();
    }, []);
    return (
        <ul>
            {data.hits.map((item) => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
}
export default Hits;
