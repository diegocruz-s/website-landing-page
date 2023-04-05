const yDefault = 400
export const delayDefault = .5
const durationDefault = .4

export const NavbarAnimations = {
    menuContainer: {
        initial: { height: 0, opacity: 1, borderBottomLeftRadius: "30%", borderBottomRightRadius: "30%",  },
        animate: {  height: "100vh", opacity: 1, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
        transition: { duration: .5 },
        exit : {
            height: 0,
            // width: 0,
            opacity: 0.2,
            borderBottomLeftRadius: "10%",
            borderBottomRightRadius: "10%",
            transition: {
                ease: "easeInOut",
                duration: .5,
                delay: delayDefault
            }
        }
    },

    itemsMenu: {
        itemOne: {
            initial: { y: yDefault * 2.5, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: delayDefault + 0.1, duration: durationDefault },
            exit: {
              opacity: 0,
              y: yDefault,
              transition: {
                ease: "easeInOut",
                duration: durationDefault,
                delay: delayDefault - 0.2
              }
            }
        },
        itemTwo: {
            initial: { y: yDefault * 2, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: delayDefault + 0.2, duration: durationDefault },
            exit: {
              opacity: 0,
              y: yDefault * 1.5,
              transition: {
                ease: "easeInOut",
                duration: durationDefault,
                delay: delayDefault - 0.3
              }
            }
        },
        itemThree: {
            initial: { y: yDefault * 1.5, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: delayDefault + 0.3, duration: durationDefault },
            exit: {
              opacity: 0,
              y: yDefault * 2,
              transition: {
                ease: "easeInOut",
                delay: delayDefault - 0.4,
                duration: durationDefault
              }
            }
        },
        itemFour: {
          initial: { y: yDefault, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: delayDefault + 0.4, duration: durationDefault },
          exit: {
            opacity: 0,
            y: yDefault * 2.5,
            transition: {
              ease: "easeInOut",
              delay: delayDefault - 0.5,
              duration: durationDefault
            }
          }
      }
    },

    button: {
      initial: { rotate: 0 },
      animate: { rotate: 90, transition: { duration: durationDefault } }
    },

    firstStrokeButton: {
      initial: { rotate: 0 },
      animate: { rotate: 45, transition: { duration: .3 } },
      exit: { rotate: 0, transition: { duration: .3 } }
    },

    secondStrokeButton: {
      initial: { rotate: 0, width: "1.7em" },
      animate: { rotate: -45, width: "2em", top: 0, transition: { duration: .3 } },
      exit: { rotate: 0, transition: { duration: .3 } }
    },

    textHover: {
      initial: { width: 0 },
      animate: { width:  "100%", transition: { duration: 0.5 } },
      exit: { width:  0, transition: { duration: 0.2 } }
    },

    buttonCloseMenu: {
      initial: { right: -100, rotate: 0, opacity: 0 },
      animate: { delay: delayDefault, right: 20, rotate: 0, opacity: 1, transition: { duration: durationDefault * 2 } },
      whileHover: { rotate: 180, transition: { duration: durationDefault * 1.5 } },
      exit: { opacity: 0, right: -100, rotate: 180, transition: { duration: durationDefault * 2 } },
    },
    
}
