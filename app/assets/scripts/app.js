import $ from "jquery";

import mobileMenu from "./modules/mobileMenu";
import revealOnScroll from "./modules/revealOnScroll";
import stickyHeader from "./modules/stickyHeader";
import modal from "./modules/modal";

var mobilemenu = new mobileMenu();
var stickyheader = new stickyHeader();
var siteModal = new modal();
new revealOnScroll($(".feature-item"), "85%");
new revealOnScroll($(".testimonial"), "60%");
