import React, { useState } from 'react';
import BilgiSidebar from './BilgiSidebar';
import BilgiRight from './BilgiRight';

const FirmaContent = () => {
    const [tab, setTab] = useState(0);

    const handleTabSelect = (number) => {
        setTab(number);
        console.log("tıklandı");
    }

    return (
        <div className='flex gap-5 mt-5'>
            <BilgiSidebar tab={tab} setTab={handleTabSelect} />
            <BilgiRight tab={tab} setTab={handleTabSelect} />
        </div>
    );
}

export default FirmaContent;    