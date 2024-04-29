import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftDetails = () => {

    const crafts=useLoaderData()
    console.log(crafts);
    return (
        <div>
            hhhhhhhhhhhhhhhhhh
        </div>
    );
};

export default CraftDetails;