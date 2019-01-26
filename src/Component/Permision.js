import React from "react";

const Buttons = props => {
	return (
		<div className="row mt-3">
			<div className="col-md-6 mx-auto">
				<div className="card">
					<div className="body  p-3">{props.children}</div>
					<div className="card-footer d-flex justify-content-center">
						<button className="btn btn-success mr-2">Approval</button>
						<button className="btn btn-danger ml-2">Reject</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Buttons;
