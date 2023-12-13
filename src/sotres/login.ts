import {defineStore} from 'pinia'

const useLoginStore = defineStore("login",{
    state(){
        return{
            count:0
        }
    }
})


export default useLoginStore