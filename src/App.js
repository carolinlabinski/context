// import React from "react";
// import "./App.css";
// import CounterContext from "components/Counter";
// import Child from "components/Child";

// function App() {
// 	return (
// 		<div className="App">
// 			<p>hello app</p>
// 			<CounterContext />
// 			<Child />
// 		</div>
// 	);
// }

// export default App;

// import React from "react";
// import CounterContext from "components/Counter";
// import Child from "components/Child";

// const App = () => {
// 	return (
// 		<CounterContext.Provider value={{ name1: "Matthieu", name2: "Mathis" }}>
// 			<p>hello app</p>
// 			<Child />
// 		</CounterContext.Provider>
// 	);
// };

// export default App;

//import React from "react";
import TotoContext from "components/Toto";
import React from "react";
// import React, { createContext } from "react";

import Child from "components/Child";

const App = () => {
	// const TotoContext = createContext({ name1: "Matthieu", name2: "Mathis" });

	return (
		<div>
			<TotoContext.Provider value={{ name1: "Matthieu", name2: "Mathis" }}>
				{" "}
				<Child />
			</TotoContext.Provider>
		</div>
	);
};

export default App;
