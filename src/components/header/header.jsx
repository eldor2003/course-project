import React from "react";
import Link from "next/link";
import "./header.scss";
import { useState } from "react";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleHamburgerClick = () => {
		setMenuOpen(true); // Hamburger bosilganda menyuni ochamiz
	};

	const handleCloseClick = () => {
		setMenuOpen(false); // Yopish tugmasi bosilganda menyuni yopamiz
	};

	return (
		<header className={`${menuOpen ? "active" : ""}`}>
			<div className='container'>
				<div className='header_block'>
					<div className='logo_img'>
						<Link href='/'>Logo</Link>
					</div>
					<div className={`mobile_wrapper ${menuOpen ? "active" : ""}`}>
						<ul className='header_navs'>
							<li>
								<Link href='/'>Главная</Link>
							</li>
							<li>
								<Link href='/'>О нас</Link>
							</li>
							<li>
								<Link href='/course-page'>Пакеты</Link>
							</li>
						</ul>
						<div className='header_login'>
							<Link href={"/"}>Вход</Link>
						</div>
					</div>
					<div
						className={`mobile_hamburger ${menuOpen ? "hide" : ""} `}
						onClick={handleHamburgerClick}
					>
						<img src='./images/menu.svg' alt='' />
					</div>
					<div
						className={`close_img ${menuOpen ? "active" : ""}`}
						onClick={handleCloseClick}
					>
						<img src='./images/close.svg' alt='' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
