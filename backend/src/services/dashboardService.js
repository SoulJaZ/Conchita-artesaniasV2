import Product from "../models/Product.js";
import User from "../models/User.js";

export const getDashboardStats = async () => {

    const totalProducts = await Product.countDocuments();

    const totalUsers = await User.countDocuments();

    const stock = await Product.aggregate([
        {
            $group: {
                _id: null,
                totalStock: {
                    $sum: "$stock"
                }
            }
        }
    ]);

    return {

        totalProducts,

        totalUsers,

        totalStock: stock[0]?.totalStock || 0

    };

};  