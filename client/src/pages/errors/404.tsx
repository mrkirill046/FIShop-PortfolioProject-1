import {useEffect} from 'react'
import {title} from '../../tools/constants'

export default function Page404() {
    useEffect(() => {
        document.title = `${title} 404`
    }, []);

    return (
        <main>

        </main>
    )
}