import {defineStore} from 'pinia'
export const useAuthUserStore=defineStore('AuthUserStore',{
    state:()=>({
        userName:'danielkelly_io'
    }),
    actions:{
        visitTwitterProfile(){
            window.open(`https://twitter.com/${this.username}`,"_blank")
        }
    }
})