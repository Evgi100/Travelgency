import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

export default class stickyHeader {
  constructor() {
    this.siteHeader = $('.header');
    this.headerTrigger = $('.large-hero__title');
    this.createHeaderWaypoints();

    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createPageSectionsWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoints() {
    new Waypoint({
      element: this.headerTrigger[0],
      handler: direction => {
        if (direction === 'down') {
          this.siteHeader.addClass('header--dark');
        } else {
          this.siteHeader.removeClass('header--dark');
        }
      }
    });
  }

  createPageSectionsWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: direction => {
          if (direction === 'down') {
            var matchingHeaderLink = currentSection.getAttribute(
              'data-matching-link'
            );
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '18%'
      });
      new Waypoint({
        element: currentSection,
        handler: direction => {
          if (direction === 'up') {
            var matchingHeaderLink = currentSection.getAttribute(
              'data-matching-link'
            );
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '-10%'
      });
    });
  }
}
