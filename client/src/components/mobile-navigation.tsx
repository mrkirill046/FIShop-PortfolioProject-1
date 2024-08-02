export default function MobileNavigation() {
    return (
        <dialog className={'mobile-overlay visible-mobile'} id={'mobileOverlay'}>
            <form className={'mobile-overlay__close-button-wrapper'} method='dialog'>
                <button className='mobile-overlay__close-button cross-button' type='submit'>
                    <span className='visually-hidden'>Close navigation menu</span>
                </button>
            </form>

            <nav className='mobile-overlay__body'>
                <ul className='mobile-overlay__list'>
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

                <ul className={'mobile-overlay__list-buttons'}>
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
        </dialog>
    )
}
