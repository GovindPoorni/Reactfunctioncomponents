import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

export const ParentComponent = () => {
    const [name, setName] = useState("Govind");

    const updateName = (receivedName) => {
        setName(receivedName);
    };

    return (
        <div>
            <ChildComponent nameFromParent={name} newNameFromChild={updateName} />
        </div>
    );
};

