
const camera = {
    price: 600,
    weight: 1000,
    myDesc: () => {
        return `This is canon camera is of ${this.price}$`

    }
}

console.log(camera.myDesc())