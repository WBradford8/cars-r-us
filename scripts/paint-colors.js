import { getPaintColors, setPaintColor } from "./database.js";

const colors = getPaintColors()

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