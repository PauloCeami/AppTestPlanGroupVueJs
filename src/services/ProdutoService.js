import axios from "axios";

export class ProdutoService {
    
    // api 
    static baseUrl = 'http://apptestplangroup.test/api/v1';

    static getAllProdutos() {
        let dataUrl = `${this.baseUrl}/produtos`;
        return axios.get(dataUrl);
    }

    static getProduto(id) {
        let dataUrl = `${this.baseUrl}/produtos/${id}`;
        return axios.get(dataUrl);
    }

    static createProduto(produto) {
        let dataUrl = `${this.baseUrl}/produtos`;
        return axios.post(dataUrl, produto);
    }

    static updateProduto(produto, id) {
        let dataUrl = `${this.baseUrl}/produtos/${id}`;
        return axios.put(dataUrl, produto);
    }

    static deleteProduto(id) {
        let dataUrl = `${this.baseUrl}/produtos/${id}`;
        return axios.delete(dataUrl);
    }

    static getAllMarcas() {
        let dataUrl = `${this.baseUrl}/marcas`;
        return axios.get(dataUrl);
    }

    static getMarcasByID(id) {
        let dataUrl = `${this.baseUrl}/marcas/${id}`;
        return axios.get(dataUrl);
    }

}