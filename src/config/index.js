const API_URL = "https://webshop-darkwep.herokuapp.com";



const Apis = {
    //product api
    // GetProductById: `${API_URL}/api/products/getWebProductById?id=`,
    GetAllGroceryStaple: `${API_URL}/api/product/getAllGroceryStaple`,
    GetAllProductList: `${API_URL}/api/products`,
    GetUserRegister: `${API_URL}/user/register`,
    GetUserLogin: `${API_URL}/user/login`,
    GetOrderCreateByUser: `${API_URL}/order/new`,
    GetCustomerDetails: `${API_URL}/user/getDetail`
        // GetProductById: `${API_URL}/api/products/:_id`

};
export { API_URL, Apis };