<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Update Produto</p>
        <router-link to="/produtos" class="btn btn-dark btn-sm"
          ><i class="fa fa-back"></i> voltar</router-link
        >
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitUpdate()">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Nome do Produto</label
            >
            <input
              v-model="produto.prd_nome"
              type="text"
              name="prd_nome"
              class="form-control"
              id="prd_nome"
              placeholder="Nome do Produto"
            />
          </div>
          <div class="mb-3">
            <label for="prd_descricao" class="form-label"
              >Descrição do Produto</label
            >
            <textarea
              v-model="produto.prd_descricao"
              name="prd_descricao"
              class="form-control"
              id="prd_descricao"
              rows="3"
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="prd_descricao" class="form-label"
              >Descrição do Produto</label
            >
            <select
              v-model="produto.mrc_id"
              class="form-select"
              aria-label="Default select example"
            >
              <option
                v-for="marca of marcas"
                :key="marca.mrc_id"
                :value="marca.mrc_id"
              >
                {{ marca.mrc_nome }}
              </option>
            </select>
          </div>
          <button class="btn btn-dark" type="submit">alterar</button>
        </form>
      </div>

      <div class="col-md-6">
        <div class="alert alert-danger" v-if="ErrorExist">
          {{ errorMessage.prd_nome }}
        </div>

        <div class="alert alert-danger" v-if="ErrorExist">
          {{ errorMessage.prd_descricao }}
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import { ProdutoService } from "@/services/ProdutoService";
export default {
  name: "EditProduto",

  data: function () {
    return {
      ErrorExist: false,
      ProdutoID: this.$route.params.id,
      produto: {
        prd_nome: "",
        prd_descricao: "",
        mrc_id: "",
      },
      marcas: [],
      errorMessage: {
        prd_nome: "",
        prd_descricao: "",
        mrc_id: "",
      },
    };
  },
  created: async function () {
    this.ErrorExist = false;
    try {
      let response = await this.getAllMarcasData();
      this.marcas = response.data.data;
    } catch (error) {
      this.errorMessage = error.response.data.errors;
    }

    try {
      let response = await this.getProdutoIDData();
      this.produto = response.data.data;
    } catch (error) {
      this.errorMessage = error.response.data.errors;
    }
  },
  methods: {
    getProdutoIDData: async function () {
      return await ProdutoService.getProduto(this.ProdutoID);
    },
    getAllMarcasData: async function () {
      return await ProdutoService.getAllMarcas();
    },
    submitUpdate: async function () {
      try {
        let response = await ProdutoService.updateProduto(
          this.produto, // produto dos fields
          this.ProdutoID // produto do params
        );
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/produtos/edit/" + this.ProdutoID);
        }
      } catch (error) {
        console.log(error);
        this.ErrorExist = true;
        this.errorMessage = {
          prd_nome: error.response.data.errors.prd_nome,
          prd_descricao: error.response.data.errors.prd_descricao,
        };
      }
    },
  },
};
</script>
    
    <style>
</style>
    