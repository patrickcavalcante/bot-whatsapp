import { 
  IDOP_CHANGED,
  OPERATOR_NAME_CHANGED,
  ADS_CHANGED,
  NAME_CHANGED,
  STEP_CHANGED
} from '../types'
 
export function changeIdOp(idOp) {
  return {
    type: IDOP_CHANGED,
    payload: idOp
  }
}

export function changeOperatorName(nomeOperadora) {
  return {
    type: OPERATOR_NAME_CHANGED,
    payload: nomeOperadora
  }
}

export function changeAds(ads) {
  return {
    type: ADS_CHANGED,
    payload: ads
  }
}

export function changeName(name) {
  return {
    type: NAME_CHANGED,
    payload: name
  }
}

export function changeStep(step) {
  return {
    type: STEP_CHANGED,
    payload: step
  }
}