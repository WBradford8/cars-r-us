import { getWheels, setWheel } from "./database.js";

const wheels = getWheels();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            // window.alert(`User chose style ${event.target.value}`)
            setWheel(parseInt(event.target.value))
        }
    }
)

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