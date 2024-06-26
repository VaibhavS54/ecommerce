const express = require("express");
const router = express.Router();

const { createProduct } = require("../controllers/Products/createProduct");
const { deleteProduct } = require("../controllers/Products/deleteproduct");
const { getAllProducts } = require("../controllers/Products/getallproducts");
const { updateProduct } = require("../controllers/Products/updateProduct");
const { createComment } = require("../controllers/Reviews/reviewcreate");
const { getAllReview } = require("../controllers/Reviews/getallreview");
const { signup } = require("../controllers/Auth/Auth");
const { login } = require("../controllers/Auth/Auth");
const { auth } = require("../middlewares/auth");
const { searchProductsByCategory } = require("../controllers/Products/findspecific");
const { getproductsbyID } = require("../controllers/Products/findbyid");
const { createCart } = require("../controllers/Cart/cartcreate");
const { deleteCart } = require("../controllers/Cart/deletecart");
const { getAllCartUser } = require("../controllers/Cart/getallcart");
const { createWishlist } = require("../controllers/Wishlist/createwishlist");
const { deleteWishlist } = require("../controllers/Wishlist/deletewishlist");
const { getAllWishlistUser } = require("../controllers/Wishlist/getallwishlist");

router.get("/getallwishlist",getAllWishlistUser);
router.post("/deletewishlist/:id",deleteWishlist);
router.post("/createwishlist",createWishlist);

router.post("/deletecart/:id",deleteCart);
router.post("/createcart",createCart);
router.get("/getallcart",getAllCartUser);

router.get("/findspecific/:maincategory?/:subcategories?/:lastcategories?/:material?",searchProductsByCategory);
router.get("/getproductbyID/:id",getproductsbyID);

router.get("/test", auth, (req,res) => {
    res.json({
        success: true,
        message: "Test successful"
    })
})



router.post("/signup",signup);
router.post("/login",login);



router.post("/addreview", createComment);
router.get("/getallreviews",getAllReview);


router.post("/addproduct", createProduct);
router.post("/deleteproduct",deleteProduct);
router.get("/getallproducts",getAllProducts);
router.post("/updateproduct/:id",updateProduct);

module.exports = router;
