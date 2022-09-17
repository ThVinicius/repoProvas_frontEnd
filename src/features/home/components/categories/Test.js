import { TestName, Anchor } from './categoriesStyles'

export default function Test({ testName, info, pdfUrl }) {
  return (
    <Anchor href={pdfUrl} target="_blank" rel="noopener noreferrer">
      <TestName>
        {testName}
        <span>({info})</span>
      </TestName>
    </Anchor>
  )
}
