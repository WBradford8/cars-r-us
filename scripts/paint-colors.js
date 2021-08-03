import { getPaintColors, setPaintColor } from "./database.js";

const colors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            // window.alert(`User chose style ${event.target.value}`)
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const renderedPaintColors = () => {
    let html = "<ul>"

    const listItems = colors.map(color => {
        return `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.color}
            </li>`
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}