export const getClusterUrl = url => {
  let requestURL = url

  const reg = new RegExp(/\/(api|apis|kapis)\/(.*)\/?(klusters\/[^/]*)\/(.*)/)
  const match = requestURL.match(reg)

  if (match && match.length === 5) {
    requestURL = globals.app.isMultiCluster
      ? `/${match[1]}/${match[3].replace('klusters', 'clusters')}/${match[2]}/${
        match[4]
      }`
      : `/${match[1]}/${match[2]}/${match[4]}`
  }

  return requestURL.replace(/\/\/+/, '/')
}


export const safeParseJSON = (json, defaultValue) => {
  let result
  try {
    result = JSON.parse(json)
  } catch (e) {}

  if (!result && defaultValue !== undefined) {
    return defaultValue
  }
  return result
}


export function encrypt(salt, str) {
  return mix(salt, window.btoa(str))
}

function mix(salt, str) {
  if (str.length > salt.length) {
    salt += str.slice(0, str.length - salt.length)
  }

  const ret = []
  const prefix = []
  for (let i = 0, len = salt.length; i < len; i++) {
    const tomix = str.length > i ? str.charCodeAt(i) : 64
    const sum = salt.charCodeAt(i) + tomix
    prefix.push(sum % 2 === 0 ? '0' : '1')
    ret.push(String.fromCharCode(Math.floor(sum / 2)))
  }

  return `${window.btoa(prefix.join(''))}@${ret.join('')}`
}


export const compareVersion = (v1 = '', v2 = '') => {
  const getVersion = str =>
    str
      .split('-')[0]
      .replace('v', '')
      .split('.')
      .map(item => parseInt(item, 10))

  const v1s = getVersion(v1)
  const v2s = getVersion(v2)

  const len = Math.min(v1s.length, v2s.length)
  let i = 0
  while (i < len) {
    if (v1s[i] < v2s[i]) {
      return -1
    }
    if (v1s[i] > v2s[i]) {
      return 1
    }
    i++
  }

  if (v1s.length < v2s.length) {
    return -1
  }

  if (v1s.length > v2s.length) {
    return 1
  }

  return 0
}
