import {defineStore} from 'pinia'
export const useProductStore=defineStore('productStore',{
    state:()=>({
        products:[],
    }),
    actions:{
        async fill(){
            this.products=(await import('../data/products.json')).default
        }
    }
})