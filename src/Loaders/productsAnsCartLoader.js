import { getStoredCard } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //gets product data
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get card
    const savedCart = getStoredCard();
    const previousCart = [];
        for (const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }
    return {products : products ,previousCart: previousCart};
}