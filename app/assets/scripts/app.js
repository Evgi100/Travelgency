import $ from 'jquery';

import mobileMenu from './modules/mobileMenu';
import revealOnScroll from './modules/revealOnScroll';

var mobilemenu = new mobileMenu();
new revealOnScroll($('.feature-item'), '85%');
new revealOnScroll($('.testimonial'), '60%');
