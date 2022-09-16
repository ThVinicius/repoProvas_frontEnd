import { Container, Category, Box, Empty } from './categoriesStyles'
import Test from './Test'

export default function Categories({ arrCategories, msg }) {
  return (
    <Box>
      {arrCategories.length !== 0 ? (
        arrCategories.map(({ category, tests }, index) => (
          <Container key={index}>
            <Category>{category}</Category>
            {tests.map(({ test, pdfUrl, teacher }, index) => (
              <Test testName={test} info={teacher} key={index} />
            ))}
          </Container>
        ))
      ) : (
        <Empty>{msg}</Empty>
      )}
    </Box>
  )
}
