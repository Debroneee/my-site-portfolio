import React from 'react';
import {Link} from 'gatsby';
import { window } from 'browser-monads';
import './header.css';
import logo from '../../images/logo.jpg';
import vk from '../../images/vk.svg';
import linkedin from '../../images/linkedin.svg';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import telegram from '../../images/telegram.svg';
import facebook from '../../images/facebook.svg';
import photo from '../../images/photo.png';
import symbols from '../../images/symbols.png';
import burger from '../../images/burger.svg'

class Header extends React.Component {
  
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
      return (  
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="user">
                        <div className="user__avatar">
                            <Link className="navbar-item" to="/">
                                <img src={logo} style={{ width: '57px' }} className="nav__logo" itemprop="image" alt="" />
                            </Link>
                        </div>
                        <div className="user__content">
                        <div className="user__name">Andrey <br /> Bunakov</div>
                        <div className="user__prof">Fron-End Developer</div>
                        </div>
                    </div>
                    <nav className={`nav ${menuActive}`}>
                        <Link className={window.location.href.indexOf('/') > 0 ? 'nav__link  active' : 'nav__link '}
                            to='/' onClick={this.toggleMenu}>Главная</Link>
                        <Link className={window.location.href.indexOf('works') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__link  active' : 'nav__link '}
                            to='/works' onClick={this.toggleMenu}>Работы</Link>
                        <Link className={window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__link  active' : 'nav__link '}
                            to='/blog' onClick={this.toggleMenu}>Обо мне</Link>
                        <Link className={window.location.href.indexOf('about') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__link  active' : 'nav__link '}
                            to='/about' onClick={this.toggleMenu}>Блог</Link>
                        <Link className={window.location.href.indexOf('contacts') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__link  nav__link--btn active' : 'nav__link  nav__link--btn'}
                            to='/contacts' onClick={this.toggleMenu}>Связаться</Link>  
                    </nav>
                    <button type="button" className={`burger ${burgerActive}`} onClick={this.toggleMenu}>
                        <img src={burger} className="burger__image" itemprop="image" alt="" />
                    </button>
                </div>
            </div>
            <section className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <div className="intro__content">
                            <h2 className="intro__subtitle">Привет, я</h2>
                            <h1 className="intro__title">Бунаков Андрей</h1>
                            <div className="intro__text">Front-End Разработчик</div>
                            <div className="header__social">
                                <div className="social">
                                    <Link className="social__link">
                                        <img src={vk} className="social__icon vk" style={{ width: '40px' }} itemprop="image" alt="" />
                                    </Link>
                                    <Link className="social__link">
                                        <img src={linkedin} className="social__icon" style={{ width: '40px' }} itemprop="image" alt="" />
                                    </Link>
                                    <Link className="social__link">
                                        <img src={instagram} className="social__icon" style={{ width: '40px' }} itemprop="image" alt="" />
                                    </Link>
                                    <Link className="social__link">
                                        <img src={twitter} className="social__icon" style={{ width: '40px' }} itemprop="image" alt="" />
                                    </Link>
                                    <Link className="social__link">
                                        <img src={telegram} className="social__icon" style={{ width: '40px' }} itemprop="image" alt="" />
                                    </Link>
                                    <Link className="social__link">
                                    <   img src={facebook} className="social__icon" style={{ width: '40px' }} itemprop="image" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <Link className="nav__link--btn btn" to='/contacts'>Связаться</Link>
                            <Link className="nav__link--btn btn" to='/resume'>Моё Резюме</Link>
                            <img src={symbols} className="intro__photo" itemprop="image" alt="" />
                            <img src={photo} className="intro__photo" itemprop="image" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </header>
        //   <div className="container">
        //     <nav className="navbar">
        //         <div className="navbar__user">
        //             <div className="user__avatar">
        //                 <Link className="navbar-item" to="/">
        //                     <img src={logo} style={{ width: '57px' }} className="navbar__logo" itemprop="image" alt="" />
        //                 </Link>
        //             </div>
        //             <div className="user__content">
        //                 <div className="user__name">Andrey <br /> Bunakov</div>
        //                 <div className="user__prof">Fron-End Developer</div>
        //             </div>
        //         </div>
        //         <div className={`navbar-menu ${menuActive}`}>
        //             <Link className={window.location.href.indexOf('/') > 0 ? 'nav__link  active' : 'nav__link '}
        //                 to='/' onClick={this.toggleMenu}>Главная</Link>
        //             <Link className={window.location.href.indexOf('works') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__link  active' : 'nav__link '}
        //                 to='/works' onClick={this.toggleMenu}>Работы</Link>
        //             <Link className={window.location.href.indexOf('blog') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__link  active' : 'nav__link '}
        //                 to='/blog' onClick={this.toggleMenu}>Обо мне</Link>
        //             <Link className={window.location.href.indexOf('about') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__link  active' : 'nav__link '}
        //                 to='/about' onClick={this.toggleMenu}>Блог</Link>
        //             <Link className={window.location.href.indexOf('contacts') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__link  nav__link--btn active' : 'nav__link  nav__link--btn'}
        //                 to='/contacts' onClick={this.toggleMenu}>Связаться</Link>    
        //         </div>
        //         <div className={`navbar-burger burger ${burgerActive}`} onClick={this.toggleMenu}>
        //             <img src={burger} style={{ width: '40px' }} itemprop="image" alt="" />
        //         </div>
        //     </nav>
        //   </div>   
)
    }
};

export default Header;