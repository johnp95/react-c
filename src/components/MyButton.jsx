const MyButton = ({ count, setCount }) => {
    return (
        <div>
            <button onClick={setCount}>+</button>
            <h1>{count}</h1>
        </div>
    );
};
export default MyButton;
