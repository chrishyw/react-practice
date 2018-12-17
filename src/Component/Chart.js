import React from "react";
import ReactChartkick, { PieChart, LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart);

class chart extends React.PureComponent {
	// use PureComponent over functional component as functional components will
	// re-render everytime props change. PureComponent will do a shallow
	// props and state check.	  

	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		ready: false
	// 	}
	// 	console.log(this.props);
	// }

	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log("Chart Should Update?", this.props.chartType !== nextProps.chartType);
	// 	return this.props.chartType !== nextProps.chartType;
	// }

	render(){
		console.log("Chart rendered with props: ",this.props);
		let pieData = [["Blueberry", 44], ["Strawberry", 23], ["Apple", 14], ["Grapes", 56]];
	    let lineData = {"2017-05-13": 2, "2017-05-14": 5, "2017-05-15": 1, "2017-05-16": 9, "2017-05-17": 8};

	    let chart = this.props.chartType === "pie" ? <PieChart data={pieData} /> : <LineChart data={lineData} />;
	    return(chart);
	}
	
}

export default chart;