export default {
    //Tipo um data passa os parametros base
    state: {
        produtos: [],
    },
    //Le o estado
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        }
    },
    //Controla os estados globais da aplicacao,evitando duplicar codigos, alterar o estado
    mutations: {
        adicionarProdutos(state, payload) {
            state.produtos.push(payload)
        },
        //payload algo novo
    },
    //Colocar regras, condicoes em que o estado tera
    actions: {
        adicionarProdutos(context, payload) {
            setTimeout(() => {
                context.commit('adicionarProdutos', payload)
            },1000)
        }
    }
}