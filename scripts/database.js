const database = {
    orderBuilder :
    {},
    paintColors : [
        {id: 1, color: "Silver", price: 150.00},
        {id: 2, color: "Midnight Blue", price: 169.00},
        {id: 3, color: "Firebrick Red", price: 85.50},
        {id: 4, color: "Spring Green", price: 75.25}
    ],
    interiors : [
        {id: 1, fabric: "Beige Fabric", price: 120.00},
        {id: 2, fabric: "Charcoal Frabric", price: 180.25},
        {id: 3, fabric: "White Leather", price: 200.50},
        {id: 4, fabric: "Black Leather", price: 275.25}
    ],
    technologies : [
        {id: 1, techPackage: "Basic Package", price: 150.00},
        {id: 2, techPackage: "Navigation Package", price: 500.00},
        {id: 3, techPackage: "Visibility Package", price: 520.50},
        {id: 4, techPackage: "Ultra Package", price: 999.99}
    ],
    wheels : [
        {id: 1, wheelType: "17-inch Pair Radial", price: 599.00},
        {id: 2, wheelType: "17-inch Pair Radial Black", price: 699.00},
        {id: 3, wheelType: "18-inch Pair Spoke Silver", price: 799.50},
        {id: 4, wheelType: "18-inch Pair Spoke Black", price: 899.25}
    ],
    customOrders: [
        {
            id: 1,
            paintColorId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 4
        }
    ]
};

export const getPaintColors = () => {
    return database.paintColors.map(color => ({...color}))
}
export const getInteriors = () => {
    return database.interiors.map(fabric => ({...fabric}))
}
export const getTechnologies = () => {
    return database.technologies.map(techPackage => ({...techPackage}))
}
export const getWheels = () => {
    return database.wheels.map(wheelType => ({...wheelType}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}    


export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))

}