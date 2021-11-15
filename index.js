let timeline = gsap.timeline();

timeline
    .from('img', {
        duration: 1,
        easing: 'power4.out',
        scale: 0.5,
        repeat: -1,
        yoyo: true
    })