import React from 'react';
import CustomizeOptions from '../CustomizeOptions/CustomizeOptions';

const Form = (props) => {

        const feature = props.featureElement
    
        return (
          <fieldset className="feature" key={props.featureHash}>
            <legend className="feature__name">
              <h3>{props.featureElement}</h3>
            </legend>
            {props.features[feature].map((items, index) =>
              <CustomizeOptions
                key={items + "_" + index}
                items={items}
                item={items.name}
                cost={items.cost}
                feature={feature}
                selected={props.selected}
                onChange={props.onChange}
                USCurrencyFormat={props.USCurrencyFormat}
              />
            )}
          </fieldset>
        )
    
}

export default Form;