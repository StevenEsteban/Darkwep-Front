import api from '../../../../app/ApiConfig';
import { Apis } from '../../../../config';
import { NotificationManager } from 'react-notifications';

const getProductById = async(id) => {
    try {
        let result = await api.get('https://webshop-darkwep.herokuapp.com/api/products/${row._id}');
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getAllProductList = async(slug) => {
    try {
        let result = await api.get(Apis.GetAllProductList);
        if (result.error) {
            NotificationManager.error(result.error);
            return null;
        }
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getProductByFilter = async(txt) => {
    try {
        let result = await api.get(Apis.GetProductByFilter + txt);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getCategoryListByFilter = async(data) => {
    try {
        let result = await api.post(Apis.GetCategoryListByFilter, data);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getProductBySubcategory = async(data) => {
    try {
        let result = await api.post(Apis.GetProductBySubcategory, data);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const GetProductDetails = async(data) => {






}

export default {
    getProductById,
    getAllProductList,
    getProductByFilter,
    getCategoryListByFilter,
    getProductBySubcategory,
    GetProductDetails
};