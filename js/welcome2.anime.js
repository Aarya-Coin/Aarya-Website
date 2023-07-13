document.addEventListener('DOMContentLoaded', () => {
    // Wrapper animation
    anime.timeline({
      easing: "linear",
    })
    .add({
      targets: ".welcome-wrapper",
      delay: 2000,
      opacity: 1,
      //translateY:["0%", "100%"],
      duration: 100,
      easing: "linear",
      complete: function (anime) {
         document.querySelector('.welcome-wrapper').remove();
      }
    })

    // Text animation
    .add({
      targets: ".cheading #line1",
      translateY: ["80%", "0%"],
      opacity: [0, 1],
      delay: 0,
      duration: 300,
      easing: "easeInOutCirc",
    })
    .add({
      targets: ".cheading #line2",
      translateY: ["80%", "0%"],
      opacity: [0, 1],
      delay: 0,
      duration: 300,
      easing: "easeInOutCirc",
    })
      .add({
        targets: ".charity-grid #cimg1",
        translateY: ["80%", "0%"],
        opacity: [0, 1],
        delay: 2000,
        duration: 200,
        easing: "easeInOutCirc",
      })
      .add({
        targets: ".charity-grid #cimg2",
        translateY: ["80%", "0%"],
        opacity: [0, 1],
        delay: 200,
        duration: 200,
        easing: "easeInOutCirc",
      })
      .add({
        targets: ".charity-grid #cimg3",
        translateY: ["80%", "0%"],
        opacity: [0, 1],
        delay: 200,
        duration: 200,
        easing: "easeInOutCirc",
      })
      .add({
        targets: ".charity-grid #cimg4",
        translateY: ["80%", "0%"],
        opacity: [0, 1],
        delay: 200,
        duration: 200,
        easing: "easeInOutCirc",
      })
      .add({
        targets: ".charity-grid #cimg5",
        translateY: ["80%", "0%"],
        opacity: [0, 1],
        delay: 200,
        duration: 200,
        easing: "easeInOutCirc",
      })
      .add({
        targets: ".charity-grid #cimg6",
        translateY: ["80%", "0%"],
        opacity: [0, 1],
        delay: 200,
        duration: 200,
        easing: "easeInOutCirc",
      })
    
  });