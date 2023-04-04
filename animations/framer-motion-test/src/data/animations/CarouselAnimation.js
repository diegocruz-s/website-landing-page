export const CarouselAnimations = {
    initial: {
        opacity: 0,
        scale: 0
    },
    whileInView: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.5
          }
    },
    viewport: {
        once: true, 
        amount: .5
    },
}
