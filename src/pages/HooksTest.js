import React, { useCallback, useState, useMemo, useEffect } from "react";

function HooksTest(params) {
    let [a, setA] = useState(1);
    let [b, setB] = useState(2);
    let [list, setList] = useState([]);

    useEffect(() => {
        //didmount
        console.log('this is like did mount');
        return () => {
            console.log('this is like willUnmount');
        }
    }, [])

    let getValue = useCallback(() => {
        console.log("run useCallback");
        return a + b;
    }, [a, b]);

    let memoValue = useMemo(() => {
        console.log("run useMemo");
        return a + b;
    }, [a, b]);

    return (
        <div>
            <p>
                a:{a} b:{b} value:{getValue()}
            </p>
            {list.map((e, index) => (
                <p key={index}>useMemo: {memoValue}</p>
            ))}
            <p>
                <button onClick={() => setA(a + 1)}>A+1</button>
                <button onClick={() => {
                    setList([...list, memoValue]);
                }}>add</button>

            </p>
        </div>
    );
}

export default HooksTest;
