import React from "react";
import Buttons from "./Permision";

const Comment = ({ imgSrc, author, now, comment }) => {
	return (
		<div className="d-flex">
			<a href="/">
				<img src={imgSrc} alt="avarar" className="mr-3" />
			</a>
			<div className="d-flex flex-column align-items-center">
				<div>
					<h3 className="d-inline-block">{author}</h3>
					<small className="ml-4 text-secondary text-muted">
						{now}
					</small>
					<p className="lead">{comment}</p>
				</div>
			</div>
		</div>
	);
};

export default Comment;
