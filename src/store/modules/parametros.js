export default {
    //Tipo um data passa os parametros base
    state: {
        quantidade: 1,
        preco: 19.90
    },
    //Controla os estados globais da aplicacao,evitando duplicar codigos, alterar o estado
    mutations: {
        //payload algo novo
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },
}