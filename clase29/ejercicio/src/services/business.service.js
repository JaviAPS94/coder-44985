import BusinessDao from '../dao/classes/business.dao.js'

const businessDao = new BusinessDao();

export const getBusiness = async () => {
    const result = await businessDao.getBusiness();
    return result;
}

export const getBusinessById = async (businessId) => {
    const result = await businessDao.getBusinessById(businessId);
    return result;
}

export const createBusiness = async (business) => {
    const result = await businessDao.createBusiness(business);
    return result;
}

export const updateBusiness = async (business, product) => {
    business.products.push(product);

    const result = await businessDao.updateBusiness(business._id, business);
    return result;
}