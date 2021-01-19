import React from 'react';
import Form from '../Form/Form'

const CustomizeList = (props) => {

   return (
    <form className="main__form">
    <h2>Customize your laptop</h2>
    {Object.keys(props.features).map((feature, index) =>
      <Form
        featureElement={feature}
        key={feature + '-' + index}
        features={props.features}
        selected={props.selected}
        onChange={props.handleChange}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    )}
  </form>
   )
  
}

export default CustomizeList;