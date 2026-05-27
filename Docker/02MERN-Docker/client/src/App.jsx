import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

  const [data, setData] = useState("")

    useEffect(() => {
        fetch("http://host.docker.internal:5000/data")
            .then((res) => {
                return res.json();
            }).then((data) => {
              setData(data);
              
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section>
            <div className="max-w-7xl mx-auto py-32 min-h-screen text-center">
                <h1 className="text-4xl font-bold md:text-6xl tracking-tight">{data.message}</h1>
            </div>
        </section>
    );
};

export default App;
