import { TestName } from './categoriesStyles'

export default function Test({ testName, info }) {
  return (
    <TestName>
      {testName}
      <span>({info})</span>
    </TestName>
  )
}
