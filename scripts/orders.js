import { getInteriors, getPaintColors, getTechnologies, getWheels, getOrders } from "./database.js";

const interiors = getInteriors()
const colors = getPaintColors()
const technologies = getTechnologies()
const wheels = getWheels()


const buildOrderListItem = (order) => {
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundColor = colors.find (
        (paintColor) => {
            return paintColor.id === order.paintColorId
        }
    ) 
    const foundTechnology = technologies.find (
        (technology) => {
            return technology.id === order.technologyId
        }
    ) 
    const foundWheel = wheels.find (
        (wheel) => {
            return wheel.id === order.wheelId
        }
    ) 

const totalCost = foundInterior.price + foundColor.price + foundTechnology.price 
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency : "USD"
})
    return `<li>
        Order #${order.id} was placed. Your total is ${costString}
</li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem) 
    // => buildOrderListItem(order))

    html += listItems.join("")
    html += "</ul>"

    return html    
}
