import './box.css'
import parfum from '/images/image-product-desktop.jpg'
import cart from '/images/icon-cart.svg' 

 
 function Container(){
    return (
        <>
          <div className='cont'>
          <div className='imageBox'>
            <img src={parfum} className='photo'/>
          </div>
          <div className='description'>
            <p className='perfume'>PERFUME</p>
            <h1>Gabrielle <br/>Essence Eau De Parfum</h1>
            <p className='pharagraph'>A floral, solar and voluptuous <br/> interpretation composed by <br/>Olivier Polge, Perfumer-Creator <br/> for the House of CHANEL.</p>
            <div className='price'><span>$149.99</span><del>$169.99</del></div>
            <button><img src={cart}/> add to cart</button>
          </div>
          </div>
        </>
    )
 }

 export default Container;