import { useEffect, useState } from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    const[text, setText] = useState("");
    const [data, setData] = useState("red");
    useEffect(() => {
        setText(`Le compteur à commence ${count}`);
        console.log(`couleur actuelle: ${data}`);
        document.body.style.backgroundColor = data; 
    }, [count, data]);

    return (
        <div>
                <button onClick={() => setData(data === "red" ? "blue" : "red")}>Changer la couleur</button>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
            <p>{text}</p>
        </div>
    );
}

export default Effect; 