import React, {useEffect} from 'react'
import {title} from '../tools/constants'

export default function Contacts() {
    useEffect(() => {
        document.title = `${title} Контакты`
    }, []);

    return (
        <main>

        </main>
    )
}
