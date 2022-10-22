const { default: ManageProducts } = require("../../src/Pages/Dashboard/ManageProducts")

describe('suite name', () => 
{

// test case name End to End Testing 
  it('test1 main_page', function()  
  {

    cy.visit('https://walton-pc.web.app/')

  })
}
)




// another way to write the same test
// describe('suite name', function() 
// {
//   it('test1', function()  {
//     expect(true).to.equal(true)
//   })
//   it('test2', function()  {
//     expect(true).to.equal(true)
//   })
//   it('test3', function()  {
//     expect(true).to.equal(true)
//   })
// }

