    import React from 'react';
    import { connect } from 'react-redux';
    import { addToCart } from './cartActions';

    const ApplianceComponent = ({ appliances, addToCart }) => {
    return (
        <div>
        <h2>Appliances</h2>
        <ul>
            {appliances.map((appliance) => (
            <li key={appliance.id}>
                {appliance.name} - ${appliance.price}
                <button onClick={() => addToCart(appliance)}>Add to Cart</button>
            </li>
            ))}
        </ul>
        </div>
    );
    };

    const mapStateToProps = (state) => {
    return {
        appliances: state.appliances,
    };
    };

    const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (appliance) => dispatch(addToCart(appliance)),
    };
    };

    export default connect(mapStateToProps, mapDispatchToProps)(ApplianceComponent);
