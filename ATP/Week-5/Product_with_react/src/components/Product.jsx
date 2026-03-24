function Product(props){
    
    const {productObj}=props;
    //state

    //return
    return(
        <div className='shadow-2xl p-8'>
            <h1 className='pb-3'>{productObj.title}</h1>
            <p className='pb-3'>{productObj.img}</p>
            <p className='pb-3'>{productObj.price}</p>
            <p className='pb-3'>{productObj.description}</p>
            <p >{productObj.category}</p>
        </div>
    )
}

export default Product;