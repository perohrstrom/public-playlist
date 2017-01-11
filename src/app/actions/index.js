export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const handleChange = (text) => {
  return {
    type: HANDLE_CHANGE,
    paylaod: text
  }
}
