import React, {useCallback, useEffect, useState} from 'react'
import {title} from '../tools/constants'
import HeroSlider from '../components/hero-slider'

export default function Home() {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(' ')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        document.title = `${title} Главная`
    }, []);

    const emailHandler = useCallback((e: any) => {
        setEmail(e.target.value)

        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\.,:\s@\']+(\.[^<>()[\]\.,:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,:\s@\']+\.)+[^<>()[\]\.,:\s@\']{2,})$/i

        if (!regex.test(String(e.target.value).toLowerCase())) {
            setEmailError('Данный Email некорректен')

            if (!e.target.value) {
                setEmailError('Email не может быть пустым')
            }
        } else {
            setEmailError('')
        }
    }, [])

    useEffect(() => {
        setFormValid(
            !emailError
        )
    }, [emailError])

    const Subscribe = async (userEmail: string) => {
        setEmail('')
        setEmailError(' ')

        console.log('test ', userEmail)
    }

    function clickSubscribeButton(e: any) {
        e.preventDefault()

        if (formValid) {
            Subscribe(email).then(() => console.log('Loading subscribe...'))
        }
    }

    return (
        <main>
            <section className={'section'}>
                <article className={'section__body'}>
                    <div className={'hero'}>
                        <div className={'hero__block'}>
                            <h4 className={'hero__subtitle'}>100% Органические продукты</h4>
                            <h1 className={'hero__title'}>Органические овощи & фрукты</h1>

                            <div className={'hero__subscribe'}>
                                <p className={'hero__text-error'}>{emailError}</p>

                                <form>
                                    <label>
                                        <input type='email' onChange={emailHandler} value={email} placeholder='Email'/>
                                    </label>
                                    <button type='submit' disabled={!formValid} onClick={clickSubscribeButton}>
                                        Подписаться
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className={'hero__block'}>
                            <HeroSlider/>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}
