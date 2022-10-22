import AddProduct from "../../src/Pages/Dashboard/AddProduct"

// Test component: src\Pages\Login\Login.js
describe('<AddProduct>', () => {
    it('mounts', () => {
      cy.mount(<AddProduct />)
    })
  })