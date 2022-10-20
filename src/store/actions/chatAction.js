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
  ERROR_CHANGED
} from '../types'

export function changeError(error) {
  return {
    type: ERROR_CHANGED,
    payload: error
  }
}
 
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

export function changeTell(tell) {
  return {
    type: TELL_CHANGED,
    payload: tell
  }
}

export function changeMessageTell(message) {
  return {
    type: MESSAGE_TELL_CHANGED,
    payload: message
  }
}

export function changeLives(lives) {
  return {
    type: LIVES_CHANGED,
    payload: lives
  }
}

export function changeMessageLives(message) {
  return {
    type: MESSAGE_LIVES_CHANGED,
    payload: message
  }
}