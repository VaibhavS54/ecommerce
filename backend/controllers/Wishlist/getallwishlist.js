const User = require("../../models/User");
const jwt = require("jsonwebtoken");

exports.getAllWishlistUser = async(req,res)=>{
    try{
       
        const {token} = req.body;
        const decode = jwt.verify(token, "prayas");
       
        let finder = decode.id;
        const wishlist = await User.findById({_id:finder})
            .populate("wishlist") 
            .exec();

        console.log("Fetched successfully");
        res.send(wishlist.wishlist);
        console.log(wishlist.wishlist);
        
    }
    catch(error){ 
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}