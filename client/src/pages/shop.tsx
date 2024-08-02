import React, {useEffect} from 'react'
import {title} from '../tools/constants'

export default function Shop() {
    useEffect(() => {
        document.title = `${title} Магазин`
    }, []);

    return (
        <main>

        </main>
    )
}
