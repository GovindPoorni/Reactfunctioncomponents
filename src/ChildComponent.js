import React from 'react';

const ChildComponent = (props) => {
    const updateNameHandle = () => {
        props.newNameFromChild("Poorni");
    };

    return (
        <div>
            <p>My name is {props.nameFromParent}</p>
            <button onClick={updateNameHandle}>Click</button>
        </div>
    );
};

export default ChildComponent;

