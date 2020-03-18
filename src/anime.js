import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable";

export default class Anime {
  static setWheel() {
    let sections = document.querySelectorAll(".section");
    let sectionsBg = document.querySelectorAll(".section-bg");
    let sectionsText = document.querySelectorAll(".section-text");

    let iter = 0;
    TweenMax.set(sections, { display: "none " });

    function runText(iter) {
      TweenMax.set(sections, { display: "none" });
      TweenMax.set(sectionsBg, { opacity: 0 });
      TweenMax.set(sectionsText, { opacity: 0 });

      TweenMax.set(sections[iter], { display: "block" });
      TweenMax.to(sectionsBg[iter], 2.5, { opacity: 1 });
      TweenMax.to(sectionsText[iter], 1, { opacity: 1 });
    }
    runText(iter);

    Draggable.create(".wheel-wrapper", {
      type: "rotation",
      throwProps: true,
      onDragEnd: function() {
        // Set current section
        iter = Math.round(this.endRotation / 36);
        if (iter < 0) {
          iter = 1000 - Math.abs(Math.round(this.endRotation / 36));
        }
        // Get last item from string
        let lastNum = String(iter);

        // Show current section
        runText(lastNum[lastNum.length - 1], true);
      },
      snap: function(value) {
        return Math.round(value / 36) * 36;
      }
    });
  }
}
