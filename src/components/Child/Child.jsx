// import React from "react";
// import { withCounter } from "../../components/Counter";

// const Child = ({ Counter }) => (
// 	<>
// 		<p>Hey, this is the first name : {Counter.name1}</p>
// 		<p>Hey, this is the second name: {Counter.name2}</p>
// 	</>
// );

// export default withCounter(Child);

// import React from "react";
// import TotoContext from "./Toto";

// const Child = () => {
// 	return (
// 		<TotoContext.Consumer>
// 			{(value) => (
// 				<>
// 					<p>Hey, this is the first name : {value.name1}</p>
// 					<p>Hey, this is the second name: {value.name2}</p>
// 				</>
// 			)}
// 		</TotoContext.Consumer>
// 	);
// };

// export default Child;

// import React from "react";
// import { withToto } from "./Toto";

// const Child = ({ toto }) => (
// 	<>
// 		<p>Hey, this is the first name : {toto.name1}</p>
// 		<p>Hey, this is the second name: {toto.name2}</p>
// 	</>
// );

// export default withToto(Child);

// import React from "react";
// import TotoContext from "../Toto";

// const Child = () => (
// 	<>
// 		<TotoContext />
// 		<p>Hey, this is the first name : </p>
// 		<p>Hey, this is the second name: </p>
// 	</>
// );

// export default Child;

import React from "react";
import TotoContext from "../Toto";

const Child = () => {
	return (
		<TotoContext.Consumer>
			{(value) => (
				<>
					<p>Hey, this is the first name : {value.name1}</p>
					<p>Hey, this is the second name: {value.name2}</p>
				</>
			)}
		</TotoContext.Consumer>
	);
};

export default Child;
