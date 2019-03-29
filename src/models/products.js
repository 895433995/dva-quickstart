export default {
    namespace:'products',
    state: [],
    reducers: {
        add (state, { payload: item }) {
            // return state.concat(item);
            state.push(item);
            const s = [ ...state ];
            return s;
        },
        delete (state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    }
}