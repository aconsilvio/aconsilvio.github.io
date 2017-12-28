import React, { Component } from 'react';
import './Layout.css';
import Header from './Header.js'
import Main from './Main.js'

const orderedLinks = ["front", "shifting", "spotify", "practice", "ibm", "wedo", "spring", "food", "spoon", "portfolio", "about"]

class Layout extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	activeData: this.props.data["front"],
        	nextData: this.props.data["shifting"],
        	previousData: this.props.data["about"],
        }
    }

	updateProps = (pageTitle) => {
		const index = orderedLinks.indexOf(pageTitle);
		let nextIndex, previousIndex;
		if(index === orderedLinks.length-1){
			nextIndex = 0
			previousIndex = orderedLinks.length - 2
		} else if(index === 0){
			previousIndex = orderedLinks.length - 1
			nextIndex = 1;
		} else {
  			nextIndex = index + 1;
  			previousIndex = index - 1;
  		}

		this.setState({
			activeData: this.props.data[pageTitle], 
			nextData: this.props.data[orderedLinks[nextIndex]],
			previousData: this.props.data[orderedLinks[previousIndex]],
		});


  }

  // componentDidMount() {
  //   window.scrollTo(0,0);
  // }

  
  render() {
    let mainImage = ""
    let mainAlt="";
    let allImages = [];
    let allAlt = [];
    let classTopImage = this.state.activeData.id === "about" ? "smallTopImage" : "topImage";
    console.log(this.state.activeData)
    if(this.state.activeData.images.length !== 0 && this.state.activeData.id !== "front"){
      mainImage = this.state.activeData.root + this.state.activeData.images[0].title;
      mainAlt = this.state.activeData.images[0].description
    }

    if(this.state.activeData.id === "front"){
      for(var i = 0; i < this.state.activeData.images.length; i ++){
        allImages.push(this.state.activeData.root + this.state.activeData.images[i].title)
        allAlt.push(this.state.activeData.images[i].description)
      }
    } else if(this.state.activeData.images.length > 1){
      for(var i = 1; i < this.state.activeData.images.length; i ++){
        allImages.push(this.state.activeData.root + this.state.activeData.images[i].title)
        allAlt.push(this.state.activeData.images[i].description)
      }
    }

    return (
      <div className="parent">
	      <div className="left" id="banner">
          <div className="inner">
                      <header>
              <a href="#maincontent" className="hiddenLink">Skip to main content</a>

              <a onClick={() => this.updateProps("front")}><h1><strong>annabel consilvio</strong></h1></a>
             <h2><mark>designer & developer</mark></h2>
            </header>
	        <nav id="nav">
	         <ul>
	        	<li> <a href="#maincontent" onClick={() => this.updateProps("shifting")}><strong>shifting rhythms:</strong> community development</a> </li>
	        	<li> <a href="#maincontent" onClick={() => this.updateProps("spotify")}><strong>spotify:</strong> frontend engineering</a> </li>
	        	<li> <a href="#maincontent" onClick={() => this.updateProps("practice")}><strong>practice portal:</strong> web development</a> </li>
	        	<li> <a href="#maincontent" onClick={() => this.updateProps("ibm")}><strong>ibm design:</strong> web development and design</a> </li>
	        	<li> <a href="#maincontent" onClick={() => this.updateProps("wedo")}><strong>we do:</strong> user experience design</a> </li>
	        	<li> <a href="#maincontent" onClick={() => this.updateProps("spring")}><strong>spring initiative:</strong> web development</a> </li>
	        	<li> <a href="#maincontent" onClick={() => this.updateProps("food")}><strong>food source:</strong> user centered design</a> </li>
	        	<li> <a href="#maincontent" onClick={() => this.updateProps("spoon")}><strong>share the spoon:</strong> assistive tech design</a> </li>
	        	<li> <a href="#maincontent" onClick={() => this.updateProps("portfolio")}><strong>this portfolio:</strong> accessible web development</a> </li>
	        	<li style={{marginTop: 2+'em'}}> <a href="#maincontent" onClick={() => this.updateProps("about")}><strong>about me / contact</strong></a> </li>
			      <li> <a href={require(`./images/about/AnnabelConsilvioResume.pdf`)} target="_blank"><strong>resume</strong></a> </li>
      	</ul>
	        </nav>
          </div>
	      </div>
        <div className="right">
         <div className="main" id="maincontent">
         <h3>{this.state.activeData.title}</h3>
         {this.state.activeData.date !== "" && <h4>{this.state.activeData.date} <br/> {this.state.activeData.skills} </h4>}

         {mainImage && <img src={require(`${mainImage}`)} alt={mainAlt} className={classTopImage}/>}
      {this.state.activeData.info.map(function(text, index){
        return <p key={ index }>{text}</p>;
                  })}
                  {this.state.activeData.links.length > 0 && <div className="linkDiv">
                    <h3 className="h3Alternate">relevant links</h3>
                    {this.state.activeData.links.map(function(linkObj, index){
                      return   <div className="smallDiv" key={index}><a href={linkObj.link} key={ index } className="bottomLinks" target="_blank"><strong>{linkObj.name}</strong></a></div>;
                     })}
                  
                    </div>
                  }
          <div className="bottomImageContainer">
         {allImages.map(function(imgTitle, index){
          console.log(require(`${imgTitle}`))
        return <img key={index}src={require(`${imgTitle}`)} alt={allAlt[index]} className="bottomImage"/>;
                  })}
                  </div>
         <div className="bottomParent">
         <a className="bottomLinks" href="#maincontent" onClick={() => this.updateProps(this.state.nextData.id)}><strong>next:</strong> {this.state.nextData.title}</a>
         <a className="bottomLinks" href="#maincontent" onClick={() => this.updateProps(this.state.previousData.id)}><strong>previous:</strong> {this.state.previousData.title}</a>
      	 <a href="#header" className="hiddenLink">Return to page banner</a>

      	</div>
      </div>
        </div>
      </div>
    );
  }
}

export default Layout;
