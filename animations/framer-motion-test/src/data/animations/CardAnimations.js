export const CardAnimations = {
    moveCard: {
        offScreenRight: {
            x: "-100%",
        },
        offScreenLeft: {
            x: "100%",
        },
        onScreen: {
            x: 0,
            transition: {
              type: 'spring',
              duration: 1,
              delay: .5
            }
        },
        viewport: {
            once: true, 
            rootMargin: "5px"
        },
    }
}