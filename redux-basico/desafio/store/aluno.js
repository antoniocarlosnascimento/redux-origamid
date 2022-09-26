const IMCREMENTAR_TEMPO = 'aluno/IMCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

export const incrementarTempo = () => ({type: IMCREMENTAR_TEMPO});
export const reduzirTempo = () => ({type: REDUZIR_TEMPO});
export const modificarEmail = (email) => ({
    type: MODIFICAR_EMAIL, 
    payload: email
});

const initialState = {
    nome: 'Antonio Carlos',
    email: 'antonio@email.com',
    diasRestantes: 120,
};

const reducer = immer.produce((state, action) => {
    switch(action.type) {
        case IMCREMENTAR_TEMPO:
            state.diasRestantes++;
            break;
        case REDUZIR_TEMPO:
            state.diasRestantes--;
            break;
        case MODIFICAR_EMAIL:
            state.email = action.payload;
            break;
    }
}, initialState);

export default reducer;