import {
  IDOP_CHANGED,
  OPERATOR_NAME_CHANGED,
  ADS_CHANGED,
  NAME_CHANGED,
  STEP_CHANGED,
  TELL_CHANGED,
  MESSAGE_TELL_CHANGED, 
  LIVES_CHANGED,
  MESSAGE_LIVES_CHANGED,
  NAME_COMPANY,
  TYPE_CHANGED,
  ERROR_CHANGED
} from '../types'

const initialState = {
  step: 1,
  idOp: 66,
  nome: '',
  telefone: '',
  messageTelefone: [],
  idorigem: 6,
  qPessoas: '',
  messageqPessoas: [],
  tipo: 1,
  nome_empresa: '',
  nomeOperadora: 'Plano de Saúde',
  ads: 1,
  error: ''
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
    case NAME_CHANGED: 
      return {
      ...state,
      nome: action.payload
    }
    case STEP_CHANGED: 
      return {
      ...state,
      step: action.payload
    }
    case TELL_CHANGED: 
      return {
      ...state,
      telefone: action.payload
    }
    case MESSAGE_TELL_CHANGED: 
      return {
      ...state,
      messageTelefone: [...state.messageTelefone, action.payload]
    }
    case LIVES_CHANGED: 
      return {
      ...state,
      qPessoas: action.payload
    }
    case MESSAGE_LIVES_CHANGED: 
      return {
      ...state,
      messageqPessoas: [...state.messageqPessoas, action.payload]
    }
    case TYPE_CHANGED: 
      return {
      ...state,
      tipo: action.payload
    }
    case NAME_COMPANY: 
      return {
      ...state,
      nome_empresa: action.payload
    }
    case ERROR_CHANGED: 
      return {
      ...state,
      error: action.payload
    }
    default: 
      return state
  }
}