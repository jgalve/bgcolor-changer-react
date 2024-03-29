import React from 'react';
import Button from './Button.js';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [133, 232, 123] };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }
  
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.backgroundColor = color;
    /*
    let x = document.getElementsByClassName("colorSection")

    for(var i = 0; i < x.length; i++) {
      x[i].style.background = color;
    }
    */
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return (
      <div class="mainbody">
        <div className="colorSection">
          <h1 className={this.isLight() ? 'white' : 'black'}>
            Your color is {this.formatColor(this.state.color)}.
          </h1>
          <Button 
            light={this.isLight()} 
            onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Random;

