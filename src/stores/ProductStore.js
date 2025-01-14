import {makeAutoObservable, runInAction} from 'mobx';
import {getProducts, getProduct, getSizes} from '../services/api';

class ProductStore {
    products = [];
    selectedProduct = null;
    sizes = [];

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async fetchProducts() {
        try {
            const response = await getProducts();
            runInAction(() => {
                this.products = response;
            });
        } catch (error) {
            console.error('Ошибка при загрузке продуктов:', error);
        }
    }

    async fetchProductById(id) {
        try {
            const response = await getProduct(id);
            runInAction(() => {
                this.selectedProduct = response;
            });
        } catch (error) {
            console.error('Ошибка при загрузке продукта:', error);
        }
    }

    async fetchSizes() {
        try {
            const response = await getSizes();
            runInAction(() => {
                this.sizes = response;
            });
        } catch (error) {
            console.error('Ошибка при загрузке размеров:', error);
        }
    }
}

const productStore = new ProductStore();
export default productStore;
