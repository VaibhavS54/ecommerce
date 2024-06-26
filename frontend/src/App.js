
import './App.css';
import Handbags from './components/handbag/handbags';
import Shop from './components/shop_by_catagories/shop';
import Footer from './components/footer/footer';
import Values from './components/values/value';
import HappyCustomer from './components/happy/happy';
import ProductList from './components/latestproduct/productlist';
import PopularProductList from './components/popularproduct/productlist';
import Elegants from './components/elegants/elegant';
import HandwovenProductList from './components/handwoven/productlist';
import Dashboard from './components/header/header';
import CustomProductList from './components/custom/productlist';
import OurPerspective from './components/perspective/Perspective';
import DressProductList from './components/dress/productlist';
import BlogProductList from './components/blog/productlist';
import Review from './components/review/review';
import PrivacyPolicy from './components/privacy/privacy';
import ShippingPolicy from './components/shipping/shipping';
import { Fab } from '@mui/material';
import FAQ from './components/faq/faq';
import CheckoutForm from './components/checkout/checkout';
import ArticlePage from './components/blog1/blog1';
import MyAccount from './components/account/account';
import Check from './components/check/check';
import ContactUs from './components/contactus/contact';



function App() {
  return (
    <div className="App">
    <Dashboard/>
      <ProductList/>
      <Shop/>
      <PopularProductList/>
      <OurPerspective/>
      <Elegants/>
      <HandwovenProductList/>
      <DressProductList/>
      <Handbags/>
      <CustomProductList/>
      <HappyCustomer/>
      <Values/>
      <BlogProductList/>
      <Footer/> 
       {/* <Review/> */}
       {/* <PrivacyPolicy/>
       <ShippingPolicy/> */}
       {/* <FAQ/>  */}         
       {/* <CheckoutForm/> */}
       {/* <ArticlePage/> */}
       {/* <MyAccount/> */}
       {/* <Check/> */}
       {/* <ContactUs/> */}
    </div>
  );
}

export default App;
