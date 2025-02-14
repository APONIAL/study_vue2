export default  {
    namespaced: true,
    state: {
        sum: 0,
        school: 'YCIT',
        subject: 'vue',
    },
    auctions: {
        addOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('ADD', value)
            }
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 1000);
        }
    },
    mutations: {
        ADD(state, value) {
            state.sum += value
        },
        SUBTRACT(state, value) {
            state.sum -= value
        },
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
