export const paramsSerializer = (obj: Record<string, string[]>) => {
  const arrayAux = []

  for (const key in obj) {
    if (obj[key]) {
      if (typeof obj[key] === 'object' && !obj[key].includes('Select All')) {
        obj[key].forEach((element: string) => {
          arrayAux.push(`${key}=${element}`)
        })
      } else {
        arrayAux.push(`${key}=${obj[key]}`)
      }
    }
  }

  return `?${arrayAux.join('&')}`
}
