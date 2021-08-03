import { getWheels, setWheel } from "./database.js";

const wheels = getWheels();


export const renderedWheels = () => {
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="interior" value="${wheel.id}" /> ${wheel.wheelType}
            </li>`
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}