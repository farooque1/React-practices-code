import React from 'react'
import { CConsumer } from './Contextdata'

function Contextdetails() {
    console.log();
    return (
        <div>
            <CConsumer>
                {
                    (list) =>
                    <div>
                    <p>{list.name}</p>
                    <p>{list.email}</p>
                    <p>{list.address}</p>
                    <p>{list.phone}</p>
                    </div> 
                }
            </CConsumer>
        </div>
    )
}

export default Contextdetails