<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Create Produto</p>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitCreate()">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Nome do Produto
            </label>
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
              >Descrição do Produto
            </label>
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
          <button class="btn btn-dark" type="submit">salvar</button>
        </form>
      </div>

      <div class="col-md-6">
        <div class="alert alert-danger" v-if="ErrorExist">
          {{ errorMessage.prd_nome }}
        </div>

        <div class="alert alert-danger" v-if="ErrorExist">
          {{ errorMessage.prd_descricao }}
        </div>

        <div class="alert alert-danger" v-if="ErrorExist">
          {{ errorMessage.mrc_id }}
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import { ProdutoService } from "@/services/ProdutoService";

export default {
  name: "CreateProduto",

  data: function () {
    return {
      ErrorExist: false,
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
  },
  methods: {
    getAllMarcasData: async function () {
      return await ProdutoService.getAllMarcas();
    },

    submitCreate: async function () {
      try {
        let response = await ProdutoService.createProduto(this.produto);
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/produtos/create");
        }
      } catch (error) {
        this.ErrorExist = true;
        this.errorMessage = {
          prd_nome: error.response.data.errors.prd_nome[0],
          prd_descricao: error.response.data.errors.prd_descricao[0],
          mrc_id: error.response.data.errors.mrc_id[0],
        };
        
      }
    },
  },
};
</script>
    
    <style>
</style>
    