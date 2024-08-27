import React from 'react'

import "./Cover.scss";

export function Cover({title}) {

    return (
        <>
            <div className='container-cover'>
                <h1 className='title_cover'>{title}</h1>
            </div>
        </>
    )
}
