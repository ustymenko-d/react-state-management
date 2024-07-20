import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [pageTheme, setPageTheme] = useState("dark");

	return (
		<>
			<h1>Count: {count}</h1>
      <h2>Current theme: {pageTheme}</h2>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					Increment count
				</button>
				<button onClick={() => setCount((count) => count - 1)}>
					Decrement count
				</button>
				<button
					onClick={() => {
						setTimeout(() => {
							setCount(0);
						}, 2000);
					}}
				>
					Recent count after 2sec
				</button>
			</div>
			<button
				onClick={() =>
					setPageTheme((oldTheme) => (oldTheme === "dark" ? "light" : "dark"))
				}
			>
				Change theme
			</button>
		</>
	);
}

export default App;
