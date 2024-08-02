import React, {useCallback, useEffect, useState} from 'react'

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const images = [
        '/images/hero-img-1.webp',
        '/images/hero-img-2.webp',
    ]

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }, [images.length])

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide()
            }, 3000)

            return () => clearInterval(interval)
        }
    }, [currentIndex, images.length, isHovered, nextSlide])

    function openURL(url: string) {
        window.location.href = url
    }

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={'slider container'}
        >
            <button className={'slider__button prev'} onClick={nextSlide}>{'<'}</button>

            <img
                className={'slider__image'}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                loading={'lazy'} width={430} height={290}
            />

            {
                /* eslint-disable */
                currentIndex ? (
                    <button className={'slider__info'} onClick={() => openURL('/')}>Овощи</button>
                ) : (
                    <button className={'slider__info'} onClick={() => openURL('/')}>Фрукты</button>
                )
                /* eslint-disable */
            }

            <button className={'slider__button next'} onClick={nextSlide}>{'>'}</button>
        </div>
    )
}
