import React, {useEffect} from 'react'
import {title} from '../tools/constants'

export default function About() {
    useEffect(() => {
        document.title = `${title} О нас`
    }, []);

    return (
        <main>

        </main>
    )
}
