import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [
      {
        id: '001',
        name: 'Produk1',
        jenis: '2',
        penulis: 'Hiroshi Fukazawa, Edmond Wong',
        deskripsi: 'Data Barang 1',
        image: require('../assets/noimage.png')
      },
      {
        id: '001',
        name: 'Produk1',
        jenis: '1',
        penulis: 'Hiroshi Fukazawa, Edmond Wong',
        image: require('../assets/noimage.png')
      },
      {
        id: '001',
        name: 'Produk1',
        jenis: '2',
        penulis: 'Hiroshi Fukazawa, Edmond Wong',
        deskripsi: 'Data Barang 2',
        image: require('../assets/noimage.png')
      },
      {
        id: '001',
        name: 'Produk1',
        jenis: '1',
        penulis: 'Hiroshi Fukazawa, Edmond Wong',
        deskripsi: 'Data Barang 3',
        image: require('../assets/noimage.png')
      },
      {
        id: '001',
        name: 'Produk1',
        jenis: '2',
        penulis: 'Hiroshi Fukazawa, Edmond Wong',
        deskripsi: 'Data Barang 4',
        image: require('../assets/noimage.png')
      },
      {
        id: '001',
        name: 'Produk1',
        jenis: '1',
        penulis: 'Hiroshi Fukazawa, Edmond Wong',
        deskripsi: 'Data Barang 5',
        image: require('../assets/noimage.png')
      },
      {
        id: '001',
        name: 'Produk1',
        jenis: '3',
        penulis: 'Hiroshi Fukazawa, Edmond Wong',
        deskripsi: 'Data Barang 4',
        image: require('../assets/noimage.png')
      },
      {
        id: '001',
        name: 'Produk1',
        jenis: '3',
        penulis: 'Hiroshi Fukazawa, Edmond Wong',
        deskripsi: 'Data Barang 4',
        image: require('../assets/noimage.png')
      }
    ],
    category: [
      {
        id: '1',
        name: 'Jenis 1'
      },
      {
        id: '2',
        name: 'Jenis 2'
      },
      {
        id: '3',
        name: 'Jenis 3'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getDataById: state => id => {
      return state.data.find(data => data.id === id);
    },
    getDataByJenis: state => id => {
      return state.data.filter(data => data.jenis === id);
    },
    getAllData: state => {
      return state.data;
    },
    getAllCategory: state => {
      return state.category;
    },
    getCategoryId: state => id => {
      return state.category.find(category => category.id === id);
    }
  },
  modules: {}
});
