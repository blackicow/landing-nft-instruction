import { Link } from 'react-scroll';
import discord from '../assets/img/discord.png';
import twitter from '../assets/img/twitter.png';
import logomark from '../assets/img/logomark.png';
export const Navigation = (props) => {
    return (
        <nav id="navigation" className="navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="home" spy={true} smooth={true} duration={500}>{props.data ? props.data.brand : 'Loading'}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="about" spy={true} smooth={true} duration={500}>{props.data ? props.data.about : 'Loading'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="perks" spy={true} smooth={true} duration={500}>{props.data ? props.data.perks : 'Loading'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="treasury" spy={true} smooth={true} duration={500}>{props.data ? props.data.treasury : 'Loading'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="parity" spy={true} smooth={true} duration={500}>{props.data ? props.data.parity : 'Loading'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="roadmap" spy={true} smooth={true} duration={500}>{props.data ? props.data.roadmap : 'Loading'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="team" spy={true} smooth={true} duration={500}>{props.data ? props.data.team : 'Loading'}</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="faq" spy={true} smooth={true} duration={500}>{props.data ? props.data.faq : 'Loading'}</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav social-nav">
                        <li className="nav-item d-flex align-items-baseline">
                            <a className="social" href="#discord"><img src={discord} alt="discord" width="50%" /></a>
                        </li>
                        <li className="nav-item d-flex align-items-baseline">
                            <a className="social" href="#twitter"><img src={twitter} alt="twitter" width="50%" /></a>
                        </li>
                        <li className="nav-item d-flex align-items-baseline">
                            <a className="social" href="#logomark"><img src={logomark} alt="logomark" width="50%" /></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <button id="nav-btn" type="button" className="btn btn-custom">{props.data ? props.data.mint_button_name : 'Loading'}</button>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
