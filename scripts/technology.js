import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies();


export const renderedTechnology = () => {
    let html = "<ul>"

    const listItems = technologies.map(technology => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.techPackage}
            </li>`
    })
    html += listItems.join("")
    html += "</ul>"

    return html
}