//your JS code here. If required.
const container = document.querySelector(".container");

    // Generate 800 boxes
    for (let i = 0; i < 800; i++) {
      const box = document.createElement("div");
      box.classList.add("square");

      // Change background color on hover
      box.addEventListener("mouseenter", function() {
        box.style.backgroundColor = "blue";
      });

      // Transition back to original color after 1 second
      box.addEventListener("mouseleave", function() {
        setTimeout(function() {
          box.style.backgroundColor = "lightgray";
        }, 1000);
      });

      container.appendChild(box);
    }