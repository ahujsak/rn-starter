// @flow

export function dispatchAction (type: string) {
  return {
    type
  }
}

export function dispatchActionOnly (type: string) {
  return {
    type
  }
}

export function dispatchActionObject (type: string, data: Object) {
  return {
    type,
    data
  }
}
export function dispatchActionArray (type: string, data: Array<any>) {
  return {
    type,
    data
  }
}

export function dispatchActionString (type: string, data: string) {
  return {
    type,
    data
  }
}

export function dispatchActionNumber (type: string, data: number) {
  return {
    type,
    data
  }
}
