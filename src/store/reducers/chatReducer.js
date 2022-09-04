import {
  IDOP_CHANGED,
  OPERATOR_NAME_CHANGED,
  ADS_CHANGED
} from '../types'

const initialState = {
  step: 1,
  idOp: 66,
  nome: '',
  telefone: '',
  temzap: true,
  idorigem: 6,
  qPessoas: null,
  tipo: 1,
  idade: '',
  cooparticipacao: '',
  acomodacao: '',
  atendimento: '',
  cnpj: '',
  elegibilidade: '',
  nomeOperadora: 'Plano de Saúde',
  ads: 1,
  email: '',
}

export default function chatReducer (state = initialState, action) {
  switch(action.type) {
    case IDOP_CHANGED: 
      return {
        ...state,
        idOp: action.payload
      }
    case OPERATOR_NAME_CHANGED: 
      return {
      ...state,
      nomeOperadora: action.payload
      }
    case ADS_CHANGED: 
      return {
      ...state,
      ads: action.payload
      }
    default: 
      return state
  }
}