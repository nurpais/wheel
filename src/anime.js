import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable";
let iter = 0;

export default class Anime {
  drag = null;
  runText(iter) {
    let sections = document.querySelectorAll(".section");
    let sectionsBg = document.querySelectorAll(".section-bg");
    let sectionsText = document.querySelectorAll(".section-text");
    let wheelItem = document.querySelectorAll(".wheel-item .bg");

    TweenMax.set(sections, { display: "none" });
    TweenMax.set(sectionsBg, { opacity: 0 });
    TweenMax.set(sectionsText, { opacity: 0 });
    TweenMax.set(wheelItem, { backgroundColor: "rgba(0,0,0,.8)" });

    TweenMax.set(sections[iter], { display: "block" });
    TweenMax.to(sectionsBg[iter], 2.5, { opacity: 1 });
    TweenMax.to(sectionsText[iter], 1, { opacity: 1 });
    TweenMax.to(wheelItem[iter], 1, {
      backgroundColor: "rgba(0,0,0,0)",
      delay: 0.3
    });
  }
  setWheel() {
    let wheel = document.querySelector(".wheel-wrapper");
    TweenMax.from(wheel, 1, { x: 500, y: 500 });
    TweenMax.from(wheel, 2, { rotation: 360 });
    this.runText(iter);
    const self = this;
    this.drag = Draggable.create(".wheel-wrapper", {
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
        self.runText(lastNum[lastNum.length - 1], true);
      },
      snap: function(value) {
        return Math.round(value / 36) * 36;
      }
    });
  }
  startLoader() {
    let loader = document.querySelector(".loader");
    TweenMax.to(loader, 0.3, { opacity: 0, delay: 2 });
    TweenMax.set(loader, { display: "none", delay: 2.3 });
    setTimeout(() => {
      this.setWheel();
    }, 1800);
  }

  control(dir) {
    if (dir == "next") {
      TweenMax.to(this.drag[0].target, 1, {
        rotation: (this.drag[0].rotation += 36)
      });
      iter++;
      if (iter < 0) {
        iter = 1000 - Math.abs(iter);
      }
      // Get last item from string
      let lastNum = String(iter);
      // Show current section
      this.runText(lastNum[lastNum.length - 1], true);
    } else if (dir == "prev") {
      TweenMax.to(this.drag[0].target, 1, {
        rotation: (this.drag[0].rotation -= 36)
      });
      iter--;
      if (iter < 0) {
        iter = 1000 - Math.abs(iter);
      }
      // Get last item from string
      let lastNum = String(iter);
      // Show current section
      this.runText(lastNum[lastNum.length - 1], true);
    }
  }
}
