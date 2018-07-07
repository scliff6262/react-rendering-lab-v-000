import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(nextProps){
    let shouldIt = true
    if(this.props.color === nextProps.color){
      shouldIt = false
    }
    return shouldIt
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
