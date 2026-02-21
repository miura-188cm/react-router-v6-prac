
export const lazyLoad = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return null
}