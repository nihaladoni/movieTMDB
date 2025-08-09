export const debounce = (fn: any, delay: number) => {
  let timer: any

  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export const handlePrecision = (val: any, len: number) => {
  const testVal = String(val)
  if (testVal.length >= len) {
    return `${testVal.slice(0, len)}...`
  }
  return testVal
}

export const minutesToHoursMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours ? `${hours}h` : ' '}${minutes}m`
}
