import { 
  IDOP_CHANGED,
  OPERATOR_NAME_CHANGED,
  ADS_CHANGED
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