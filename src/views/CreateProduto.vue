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
      <div class="col-md-3">
        <form action="">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Nome do Produto</label
            >
            <input
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
              name="prd_descricao"
              class="form-control"
              id="prd_descricao"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "CreateProduto",
};
</script>
    
    <style>
</style>
    