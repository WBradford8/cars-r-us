import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()



export const renderedInteriors = () => {
    let html = "<ul>"

    const listItems = interiors.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.fabric}
            </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}