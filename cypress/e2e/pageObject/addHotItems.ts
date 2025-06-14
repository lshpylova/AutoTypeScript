class addHotItems{
    
    elements ={
        addHotItem: ()=>cy.get('[class="product-item"] div a'),
        selectSize: ()=>cy.get('[class="swatch-option text"]'),
        selectColor:()=>cy.get('[class="swatch-option color"]'),
        enterQty: ()=>cy.get('[type="number"]'),
        addToCart: ()=>cy.get('button[title="Add to Cart"]'),
        qtyIsnotEmpty: ()=>cy.get('[class="counter-number"]')
    }

    selectHotseller(){
        this.elements.addHotItem().eq(1).then(($item)=>{
        cy.wrap($item).click();
        const url = $item.prop('href');
        cy.visit(url);

        })
    }
    addSize(){
        this.elements.selectSize().eq(1).then(($size)=>{
        cy.wrap($size).click();
        });
    }

        addColor(){
        this.elements.selectColor().eq(1).then(($color)=>{
        cy.wrap($color).click();
        });
    }
        addQty(qty: string){
        this.elements.enterQty().then(($quantity)=>{
        cy.wrap($quantity).clear();
        cy.wrap($quantity).type(qty);
        });
        ;}

        
    verifyAddedItems(){
        this.elements.addToCart().click();
        this.elements.qtyIsnotEmpty().should('not.be.empty');
        this.elements.qtyIsnotEmpty().should('contain.text',5);
    }
}
export default addHotItems;
