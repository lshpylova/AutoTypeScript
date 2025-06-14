import addHotItems from "../pageObject/addHotItems"
describe('Add Hot item to the basket',()=>{
beforeEach(function(){
        cy.visit("https://magento-2.showcase-wallee.com/")
})

it("Verify adding hot item", ()=> {
    const hotItem = new addHotItems();
    hotItem.selectHotseller();
    hotItem.addSize();
    hotItem.addColor();
    hotItem.addQty("5");
    hotItem.verifyAddedItems();
})
})