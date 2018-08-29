import $ from 'jquery';

class mobileMenu {
  constructor() {
    this.menuIcon = $('.header__menu-icon');
    this.menuContent = $('.header__menu-content');
    this.siteHeader = $('.header');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menuContent.toggleClass('header__menu-content--visible');
    this.siteHeader.toggleClass('header--is-expanded');
    this.menuIcon.toggleClass('header__menu-icon--close-x');
    console.log('menu-icon clicked');
  }
}

export default mobileMenu;
