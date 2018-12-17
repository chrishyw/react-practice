import React from 'react';

const notification = (props) => {
	let info = null;
	switch(props.type){
		case("error"):
			info = props.info;
			break;
		case("notification"):
			info = "Hi, "+props.info;
			break;
		default:
			
	}

	return(
		<div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>{info}</strong>
          <button id="closeBtn" type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>props.closeBtnClicked("HI!!!")} >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
	);
}

export default notification;