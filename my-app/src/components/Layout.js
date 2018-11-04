import React, { Component } from 'react';
import './Layout.css';
import Header from './Header.js'
import Main from './Main.js'

const orderedLinks = ["front", "hubspot", "shifting", "spotify", "practice", "ibm", "wedo", "spring", "food", "spoon", "portfolio", "about"]

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

    let headerHS = this.state.activeData.id === "hubspot" ? <span><mark><strong>hubspot:</strong> frontend development</mark></span> : <span><strong>hubspot:</strong> frontend development</span>
    let headerSR = this.state.activeData.id === "shifting" ? <span><mark><strong>shifting rhythms:</strong> community development</mark></span> : <span><strong>shifting rhythms:</strong> community development</span>
    let headerFront = this.state.activeData.id === "front" ? <span><mark><strong>annabel consilvio</strong></mark></span> : <strong>annabel consilvio</strong>
    let headerSpot = this.state.activeData.id === "spotify" ? <span><mark><strong>spotify:</strong> frontend engineering</mark></span>: <span><strong>spotify:</strong> frontend engineering</span>
    let headerPrac = this.state.activeData.id === "practice" ? <span><mark><strong>practice portal:</strong> web development</mark></span> : <span><strong>practice portal:</strong> web development </span>
    let headerIBM = this.state.activeData.id === "ibm" ? <span><mark><strong>ibm design:</strong>  web development and design</mark></span>: <span><strong>ibm design:</strong> web development and design</span>
    let headerWeDo = this.state.activeData.id === "wedo" ? <span><mark><strong>we do:</strong> user experience design</mark></span> : <span><strong>we do:</strong> user experience design</span>
    let headerSpr = this.state.activeData.id === "spring" ? <span><mark><strong>spring initiative:</strong> web development</mark></span> : <span><strong>spring initiative:</strong> web development</span>
    let headerFood = this.state.activeData.id === "food" ? <span><mark><strong>food source:</strong> user centered design</mark></span> : <span><strong>food source:</strong> user centered design</span>
    let headerSpoon = this.state.activeData.id === "spoon" ? <span><mark><strong>share the spoon:</strong> assistive tech design</mark></span> : <span><strong>share the spoon:</strong> assistive tech design</span>
    let headerPort = this.state.activeData.id === "portfolio" ? <span><mark><strong>this portfolio:</strong> accessible web development</mark></span> : <span><strong>this portfolio:</strong> accessible web development</span>
    let headerAbout = this.state.activeData.id === "about" ? <span><mark><strong>about me / contact</strong></mark></span> : <strong>about me / contact</strong>

    return (
      <div className="parent">
	      <div className="left" id="banner">
          <div className="inner">
                      <header>
              <a href="home" className="hiddenLink">Skip to main content</a>

              <a href="#home" onClick={() => this.updateProps("front")}><h1><strong>{headerFront}</strong></h1></a>
             <h2>designer & developer</h2>
            </header>
	        <nav id="nav">
	         <ul>
            <li> <a href="#hubspot" onClick={() => this.updateProps("hubspot")}>{headerHS}</a> </li>
            <li> <a href="#shiftingrhythms" onClick={() => this.updateProps("shifting")}>{headerSR}</a> </li>
	        	<li> <a href="#spotify" onClick={() => this.updateProps("spotify")}>{headerSpot}</a> </li>
	        	<li> <a href="#practiceportal" onClick={() => this.updateProps("practice")}>{headerPrac}</a> </li>
	        	<li> <a href="#ibm" onClick={() => this.updateProps("ibm")}>{headerIBM}</a> </li>
	        	<li> <a href="#wedo" onClick={() => this.updateProps("wedo")}>{headerWeDo}</a> </li>
	        	<li> <a href="#spring" onClick={() => this.updateProps("spring")}>{headerSpr}</a> </li>
	        	<li> <a href="#foodsource" onClick={() => this.updateProps("food")}>{headerFood}</a> </li>
	        	<li> <a href="#sharespoon" onClick={() => this.updateProps("spoon")}>{headerSpoon}</a> </li>
	        	<li> <a href="#portfolio" onClick={() => this.updateProps("portfolio")}>{headerPort}</a> </li>
	        	<li style={{marginTop: 2+'em'}}> <a href="#about" onClick={() => this.updateProps("about")}>{headerAbout}</a> </li>
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
         <p style={{paddingBottom: 0, marginBottom: 0, paddingTop: 0, fontSize: 14}}><i>photo credit: {this.state.activeData.pc}</i></p>
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
