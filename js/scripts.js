console.log("getting here...");

// welcome animation
$('.ani-welcome .letters').each(function() {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w|\.|\,)/g, "<span class='letter'>$&</span>"));
});

$('.ani-iam .letters').each(function () {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w|\.|\,)/g, "<span class='letter'>$&</span>"));
});

$('.ani-desc .letters').each(function () {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w|\.|\,)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ani-welcome .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ani-welcome .line',
    translateX: [0,$(".ani-welcome .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: '.ani-welcome .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  })
  .add({
    targets: '.ani-welcome',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  .add({
    targets: '.ani-welcome .line',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })

 
  .add({
    targets: '.ani-iam .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ani-iam .line',
    translateX: [0,$(".ani-iam .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: '.ani-iam .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  })
  .add({
    targets: '.ani-iam',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  .add({
    targets: '.ani-iam .line',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })

  
  .add({
    targets: '.ani-desc .line',
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ani-desc .line',
    translateX: [0, $(".ani-desc .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: '.ani-desc .letter',
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function (el, i) {
      return 11 * (i + 1)
    }
  })
  .add({
    targets: '.ani-desc',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  .add({
    targets: '.ani-desc .line',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  