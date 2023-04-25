import * as businessService from '../services/business.service.js'

export const getBusiness = async (req, res) => {
    try {
        const result = await businessService.getBusiness();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}

export const getBusinessById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await businessService.getBusinessById(id);
        if (!result)
            return res.status(404).send({ status: 'error', message: 'user not found' });
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}

export const createBusiness = async (req, res) => {
    try {
        const business = req.body;
        const result = await businessService.createBusiness(business);
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}

export const addProduct = async (req, res) => {
    try {
        const product = req.body;
        const { id } = req.params;
        const businessResult = await businessService.getBusinessById(id);
        if (!businessResult)
            return res.status(404).send({ status: 'error', message: 'business not found' });

        const result = await businessService.updateBusiness(businessResult, product);
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}