import { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import Dashboard from "./Components/Dashboard";

function App() {
    const [id, setId] = useState();
    const [data, setData] = useState([]);
    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        try {
            const data = await fetch(
                `http://localhost:8080/users/${id}/contents`
            );
            if (data.status >= 200 && data.status < 300) {
                const contents = await data.json();
                setData(contents);
            } else throw Error("error occured");
        } catch (e) {
            setData([]);
        }
    };
    return (
        <Container>
            <p>Enter an id of a user</p>
            <input name="id" onChange={handleChange} />
            <button onClick={handleSubmit}>submit</button>
            <Dashboard content={data} />
        </Container>
    );
}

export default App;
