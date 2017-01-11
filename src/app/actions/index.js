export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const handleChange = (text) => {
  return {
    type: HANDLE_CHANGE,
    payload: text.toUpperCase()
  }
}
