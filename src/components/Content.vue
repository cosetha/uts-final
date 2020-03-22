!<template>
  <div>
    <div class="form-group col-md-6">
      <label for="inputProvince">Filter</label>
      <select v-model="selectedCategory" class="form-control" id="inputProvince">
        <option
          :value="categorySelect.id"
          v-for="(categorySelect,index) in category"
          :key="index"
        >{{categorySelect.name}}</option>
      </select>
    </div>
    <div class="justify-content-center m-0 p-0">
      <div class="row section" v-for="(data, index) in dataRow" :key="index">
        <div class="col-md-4 col-sm-6" v-for="(datas, index) in data" :key="index">
          <b-card
            :key="index"
            :title="datas.name"
            :img-src="datas.image"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
            style="max-width: 20rem;
          "
          >
            <b-card-text class="text-muted">Category : {{categoryById(datas.jenis).name}}</b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var chunk = require("chunk");
export default {
  data() {
    return {
      dataPost: null,
      category: null,
      selectedCategory: null
    };
  },
  methods: {
    categoryById(id) {
      return this.$store.getters.getCategoryId(id);
    }
  },
  computed: {
    data() {
      return this.$store.getters.getAllData;
    },
    dataRow() {
      return chunk(this.dataPost, 3);
    },
    categoryKey() {
      return this.$store.getters.getAllCategory;
    }
  },
  created() {
    this.dataPost = this.$store.getters.getAllData;
    this.category = this.$store.getters.getAllCategory;
  },
  watch: {
    selectedCategory: function() {
      this.dataPost = this.$store.getters.getDataByJenis(this.selectedCategory);
    }
  }
};
</script>

<style scoped></style>
