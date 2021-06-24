import React from 'react'
import { nanoid } from 'nanoid'

import CollectItem from './CollectItem';


function Collect(props) {
    const { collectValue, deleteInCollect } = props;
    return (
        <div id='collect'>
            {collectValue ? collectValue.map((arr) => <CollectItem deleteInCollect={deleteInCollect} value={arr} key={nanoid().substr(0, 4)}/>) : ''}
        </div>
    )

}

export default Collect;