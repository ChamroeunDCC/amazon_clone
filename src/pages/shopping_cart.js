import Header from "../components/header";
import NavBar from "../components/navbar";
import test_product from '../assets/test_product.jpg'

const ShoppingCart = () => {
    return ( 
        <>
            <Header/>
            <NavBar/>
            <div style={{backgroundColor:'#EAEDED'}} className="p-3" id="shopping_cart">
                <div className="d-flex justify-content-center">
                    <div className="layout_shopping_cart bg-white p-3">
                        <div className="content_shopping_cart">
                            <div className="product_layout pb-3 border-bottom">
                                <div className="txt_shopping_cart">
                                    <p>total Items : 1 </p>
                                    <h3 className="text-dark">Shopping Cart</h3>
                                    <p style={{fontSize:'12px',lineHeight:'4px'}}>Deselect all items</p>
                                    <hr />
                                </div>
                                <div className="product_item row">
                                    <div className="img_product col-4 text-center">
                                        <img width={200} src={test_product} alt="" />
                                    </div>
                                    <div className="product_detail col-8">
                                        <p>Bose QuietComfort 45 Wireless Bluetooth Noise Cancelling Headphones, Over-Ear Headphones with Microphone, Personalized Noise Cancellation and Sound</p>
                                        <p><strong>$1222</strong></p>
                                        <p className="fw-bold" style={{lineHeight:'1px',fontSize:'12px'}}>Used: Like New</p>
                                        <p style={{lineHeight:'1px',fontSize:'12px'}}><strong>color:</strong></p>
                                        <p style={{lineHeight:'1px',fontSize:'12px'}}><strong>Qty : 1</strong></p>
                                        
                                        <div className="d-flex justify-content-center">
                                            <a style={{color:'#EAEDED',fontSize:'12px'}} className="ms-3 text-dark">| Delete |</a>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end pt-2">
                                <h6>Subtotal (1 item): <b>$12121</b></h6>
                            </div>
                        </div>
                    </div>
                    <div style={{height:'120px'}} className="checkout_content bg-white ms-3 p-3">
                        <h5 className="text-dark" style={{fontSize:'18px'}}>Subtotal (itmes): <b>$227.00</b></h5> 
                        <div className="d-flex">
                            <button style={{fontSize:'12px', backgroundColor:'#FCD831'}} className="rounded w-100 border-0 p-1">Procced to checkout</button>  
                        </div>    
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default ShoppingCart;