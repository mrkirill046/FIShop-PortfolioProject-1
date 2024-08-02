import React from 'react'

export default function Header() {
    function showModal() {
        const mobileOverlay: any = document.getElementById('mobileOverlay')

        if (mobileOverlay) {
            mobileOverlay.showModal()
        }
    }

    return (
        <header className={'header'}>
            <div className={'header__inner container'}>
                <a href='/' className={'header__logo logo'}>
                    <span className={'logo__text'}>FIShop</span>
                </a>

                <nav className={'header__menu hidden-mobile'}>
                    <ul className={'header__menu-list'}>
                        <li className={'header__menu-item'}>
                            <a href='/' className={'header__menu-link'}>Главная</a>
                        </li>
                        <li className={'header__menu-item'}>
                            <a href='/shop' className={'header__menu-link'}>Магазин</a>
                        </li>
                        <li className={'header__menu-item'}>
                            <a href='/about' className={'header__menu-link'}>О нас</a>
                        </li>
                        <li className={'header__menu-item'}>
                            <a href='/contacts' className={'header__menu-link'}>Контакты</a>
                        </li>
                    </ul>
                </nav>

                <nav className={'header__menu hidden-mobile'}>
                    <ul className={'header__menu-list_buttons'}>
                        <li className={'header__menu-item'}>
                            <button className={'header__menu-search'}>
                                <img
                                    src='/icons/nav/search.svg'
                                    alt='search'
                                    loading={'lazy'} width={25} height={25}
                                />
                            </button>
                        </li>
                        <li className={'header__menu-item'}>
                            <a href='/cart' className={'header__menu-image'}>
                                <img
                                    src='/icons/nav/cart.svg'
                                    alt='cart'
                                    loading={'lazy'} width={50} height={50}
                                />
                            </a>
                        </li>
                        <li className={'header__menu-item'}>
                            <a href='/profile' className={'header__menu-image'}>
                                <img
                                    src='/icons/nav/profile.svg'
                                    alt='profile'
                                    loading={'lazy'} width={50} height={50}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className={'header__burger-button visible-mobile'} onClick={showModal} type={'button'}>
                    <span className='visually-hidden'>Open navigation menu</span>
                </button>
            </div>
        </header>
    )
}
