import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {

    constructor(props){
        super(props);
        
    }
    render() {
        const {products} = this.props;
        
        // product 배열에 있는 객체중에서 Sporting Goods 값을 가진 객체배열 만들기
        const sportingProducts = products.filter(
            (product)=> product.category === "Sporting Goods"
            );

        const electProducts = products.filter(
            (product)=> product.category === "Electronics"
            );

        return (
    
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {/*<ProductRow name={products[0].name} price={products[0].price}/> 
                    {
                        products.map((product,index)=>
                        <ProductRow 
                                key={index}
                                name={product.name} 
                                price={product.price}/>)
                    }*/}
                    <ProductCategoryRow category="Sporting Goods"/>
                    {
                        // products 의 category중 'Sporting Goods'를 가진 배열을 만드는 방법
                        // filter를 이용해서 내용을 작성하고 <ProductRow/> 를 통해서 내용 출력하기
                        sportingProducts.map((product,index)=><ProductRow key={index} name ={product.name} price={product.price}/>)
                    
                    }
                    <ProductCategoryRow category="Electronics"/>
                    {
                        electProducts.map((product, index)=><ProductRow key={index} name={product.name} price={product.price}/>)
                    }
                </tbody>
            
        )
    }
}

export default ProductTable