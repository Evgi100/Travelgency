import $ from "jquery";

export default class modal {
  constructor() {
    this.openModalBtn = $(".open-modal");
    this.modal = $(".modal");
    this.modalClose = $(".modal__close");
    this.events();
  }

  events() {
    // click the openModal btn

    this.openModalBtn.click(this.openModal.bind(this));

    // click the x

    this.modalClose.click(this.closeModal.bind(this));

    //   push any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal__is-visible");
    return false; // The header is a link element and we want to prevent default behavior od scrolling up
  }

  closeModal() {
    this.modal.removeClass("modal__is-visible");
  }
}
