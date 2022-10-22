
import ManageProducts from "../../src/Pages/Dashboard/ManageProducts"

// Test component: src\Pages\Dashboard\ManageProducts.js
describe('<ManageProducts>', () => {
    it('mounts', () => {
      cy.mount(<ManageProducts />)
    })
  })