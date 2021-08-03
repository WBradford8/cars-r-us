import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            // window.alert(`User chose style ${event.target.value}`)
            setTechnology(parseInt(event.target.value))
        }
    }
)

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