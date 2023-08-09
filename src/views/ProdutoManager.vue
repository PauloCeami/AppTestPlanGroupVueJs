<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Produtos
          <router-link to="/produtos/create" class="btn btn-success btn-sm"
            ><i class="fa fa-plus-circle"></i> Novo Produto</router-link
          >
        </p>
      </div>
    </div>
  </div>

  <div class="container" v-if="produtos.length > 0">
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Descricao</th>
              <th scope="col">Marca</th>
              <th scope="col">Açoes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="produto of produtos" :key="produto">
              <th scope="row">{{ produto.prd_id }}</th>
              <td>{{ produto.prd_nome }}</td>
              <td>{{ produto.prd_descricao }}</td>
              <td>{{ produto.mrc_id }}</td>
              <td>
                <router-link
                  :to="`/produtos/edit/${produto.prd_id}`"
                  class="btn btn-warning btn-sm"
                  ><i class="fa fa-pencil"></i> Editar</router-link
                >

                <button
                  class="btn btn-danger"
                  @click="DeleteProduto(produto.prd_id)"
                >
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
    
    <script>
import { ProdutoService } from "@/services/ProdutoService";

export default {
  name: "ProdutoManager",
  data: function () {
    return {
      prdObj: {},
      produtos: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      let response = await this.getAllProdutosData();
      this.produtos = response.data.data;
    } catch (error) {
      this.errorMessage = error;
    }
  },
  methods: {
    getAllProdutosData: async function () {
      return await ProdutoService.getAllProdutos();
    },

    DeleteProduto: async function (id) {
      if (window.confirm("deseja deletar o produto ? ")) {
        try {
          let response = await ProdutoService.deleteProduto(id);
          if (response) {
            let response = await this.getAllProdutosData();
            this.produtos = response.data.data;
          }
        } catch (error) {
          this.errorMessage = error;
        }
      }
    },
  },
};
</script>
    
    <style>
</style>
    