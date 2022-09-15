import { Container } from './styles'

export default function Button(props) {
  const { width = '32%', height = '40px', loading = false } = props
  const { backgroundColor = '#1976D2', borderRadius = '4px', name } = props
  const { font = "normal 500 18px 'Roboto', sans-serif" } = props
  const {
    boxShadow = '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)'
  } = props
  const { nameLoading, color = '#FFFFFF', click = null } = props

  function loadingButton() {
    if (loading === false) return { opacity: 1, name }

    return {
      opacity: 0.7,
      name: nameLoading
    }
  }

  return (
    <Container
      onClick={click}
      type="submit"
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      color={color}
      opacity={loadingButton().opacity}
      borderRadius={borderRadius}
      font={font}
    >
      {loadingButton().name}
    </Container>
  )
}
