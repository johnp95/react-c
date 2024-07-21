import { useState } from "react";
import MyButton from "./components/MyButton";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-2xl bg-indigo-500/[.06] text-center">
                Hello World
            </h1>
            <MyButton count={count} setCount={() => setCount(count + 1)} />
        </>
    );
};
export default App;
