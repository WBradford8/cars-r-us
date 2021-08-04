import { renderedInteriors } from "./interiors.js";
import { renderedPaintColors } from "./paint-colors.js";
import { renderedTechnology } from "./technology.js";
import { renderedWheels } from "./wheels.js";
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"

document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "orderButton"){
        addCustomOrder();
        }
    }
)



export const carsRUS = () => {
    return `
        <h1>Cars R Us</h1>
        <div class="back-img"></div>
        <article class ="choices">
            <section class="interior-options">
                <h2>Interiors</h2>
                    ${renderedInteriors()}
            </section>
            <section class="color-options">
                <h2>Exterior Colors</h2>
                ${renderedPaintColors()}
            </section>
            <section class="tech-options">
                <h2>Technology Packages</h2>
                    ${renderedTechnology()}
            </section>
            <section class="wheel-options">
                <h2>Wheels</h2>
                    ${renderedWheels()}
            </section>
        </article>
        
        <article>
            <button id="orderButton">Create Custom Car</button>
        </article>

        <article class="customOrders">
            <h2>Customized Cars</h2>
            ${Orders()}
        </article>`
}