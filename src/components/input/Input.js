import { Container } from './styles'

export default function Input(props) {
  const { type = 'text', width = '32.22%', height = '56px' } = props
  const { loading = false, minLength = '', maxLength = '' } = props
  const { border = '1px solid rgba(0, 0, 0, 0.23)', borderRadius = '4px' } =
    props
  const { backGround = '#ffffff', color = 'rgba(0, 0, 0, 0.6)' } = props
  const { image = null, required = true } = props
  const { reference = null, eventKey = null } = props
  const { backgroundPosition = '98.5% 50%' } = props
  const { placeholder, value, onChange, isDisabled = false } = props

  function loadingInput() {
    if (loading === false) return { backGround, disabled: false }

    return { backGroundLoading: '#F2F2F2', disabled: true }
  }

  const { backGroundLoading, disabled } = loadingInput()

  return (
    <Container
      ref={reference}
      onKeyDown={eventKey}
      height={height}
      width={width}
      backGround={backGroundLoading}
      type={type}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      border={border}
      color={color}
      borderRadius={borderRadius}
      disabled={isDisabled || disabled}
      placeholder={placeholder}
      style={{ backgroundImage: `url(${image})` }}
      backgroundPosition={backgroundPosition}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
