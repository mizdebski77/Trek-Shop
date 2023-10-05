
export const openImage = {
    opacity: 1,
    scale: 1
};

export const closeImage = {
    opacity: 0,
    scale: 0
};

export const openWrapper = {
    opacity: 1,
};

export const closeWrapper = {
    opacity: 0,
};

export const mobileNavAnimation = {
    hidden: {
        x: "-100%",
        opacity: 0,
        transition: {
            type: "tween",
        },
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
        },
    },
}    