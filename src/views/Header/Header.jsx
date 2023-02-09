import './Header.css'

function Header() {
    return(
        <nav className='navigation-container'>
           <h1 className='navigation__title'>Navigation</h1>
           <ul className='navigation__list'>
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Products">Products</a></li>
            </ul> 
        </nav>
    )
}

export default Header