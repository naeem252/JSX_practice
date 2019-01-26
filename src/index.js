// import react and reatDOm

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./Component/CommentDetail";
import Card from './Component/FullCard'
// import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from './Component/Permision'
var times;
function gettme() {
	times = new Date().toLocaleTimeString();
	return times;
}

//import Component
const App = () => {
	return (
		<div>
			<div className="float-right mr-4 d-inline-block">
				<h1 className="font-weight-normal d-inline-block">{}</h1>
			</div>
			<div className="container">
			<Card>
			<Buttons>
				<Comment
					imgSrc={faker.image.avatar()}
					comment="How nice this is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis vitae, at natus suscipit quibusdam ex optio libero deleniti facere nulla repudiandae porro non officia fuga alias molestiae, odio nihil, neque.?"
					now={gettme()}
					author="Naeem Hasan"
				/>
				</Buttons>
				<Buttons>
				<Comment
					imgSrc={faker.image.avatar()}
					comment="WOW!"
					now={gettme()}
					author="Zobear Al Masud"
				/>
				</Buttons>
				<Buttons>
				<Comment
					imgSrc={faker.image.avatar()}
					comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non natus enim ea inventore tempore quasi saepe culpa totam nihil pariatur!!"
					now={gettme()}
					author="Ibrahim Hossain Babu"
				/>
				</Buttons>
				<Buttons>
				<Comment
					imgSrc={faker.image.avatar()}
					comment="Lorem ipsum dolor sit amet.!"
					now={gettme()}
					author="Abir"
				/>
				</Buttons>
				</Card>
			</div>
		</div>
	);
};

ReactDOM.render(<App name="Bangladesh!" />, document.getElementById("root"));
