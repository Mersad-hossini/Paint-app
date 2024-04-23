const canvas = document.getElementById("paint-canvas")
const ctx = canvas.getContext("2d")
let isPainting = false

canvas.width = innerWidth
canvas.height = innerHeight 

window.addEventListener("load", () => {

    window.addEventListener("mousedown", (e) => {
        ctx.beginPath()
        isPainting = true
        painting(e.clientX, e.clientY)
    })

    window.addEventListener("mousemove", (e) => {
        if(isPainting) {
            painting(e.clientX, e.clientY)
        }
    })

    window.addEventListener("mouseup", () => {
        isPainting = false
    })

    window.addEventListener("resize", () => {
        canvas.width = innerWidth
        canvas.height = innerHeight
    })

})

function painting(x, y) {
    ctx.lineCap = "round"
    ctx.lineWidth = 10
    ctx.lineTo(x, y)
    ctx.stroke()
}