// import React, { Component } from 'react';
// import './Main.css';

// let mainText;
// let nextTitle;
// let prevTitle;

// class Main extends Component {
// 	constructor(props) {
//         super(props);
//         this.mainText = this.props.active.info
//         this.nextTitle = this.props.next.title
//         this.prevTitle = this.props.prev.title
//         console.log(this.props)

//     }

//     componentWillReceiveProps(nextProps){
//     	console.log('hello')
//     	this.mainText = nextProps.active.info
//         this.nextTitle = nextProps.next.title
//         this.prevTitle = nextProps.prev.title
//     }


//   render() {
//   	console.log(this.props)
//     return (
//       <div className="main" id="maincontent">
//         <img src={this.props.root+this.props.images[0].title}/>
//         {this.mainText.map(function(text, index){
//           return <p key={ index }>{text}</p>;
//                     })}
//            <a>next page: {this.nextTitle}</a>
//            <a>previous page: {this.prevTitle}</a>
//       </div>
//     );
//   }
// }

// export default Main;
