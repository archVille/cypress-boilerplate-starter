Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  context('Actions', () => {
    beforeEach(() => {
      cy.visit("https://www.skyscanner.net")
    })

    it("Find cheaper tickets for monthly selection", () => {
        // accept cookies
        cy.get('button[class*="pkButtonBase_bpk-button"]').first().click()

        // enter From
        cy.get('input[name*="fsc-origin-search"]')
        .type('Athens')
        cy.contains('ATH').click({force: true})

        // enter To
        cy.get('input[name*="fsc-destination-search"]')
        .type('London')
        cy.contains('LHR').click({force: true})
        
        // enter dates
        cy.get('button[id*="depart-fsc-datepicker-button"]').click() // open calendar
        cy.get('button[class*="BpkHorizontalNavItem"]').eq(1).click() //select entire month 
        cy.get('button[class*="Monthselector_monthselector__month"]').eq(1).click() //select entire month 

        //not needed
        // cy.get('button[id*="return-fsc-datepicker-button"]').click()
        // cy.get('button[class*="BpkHorizontalNavItem"]').eq(1).click() //select enitre month 
        // cy.get('button[class*="Monthselector_monthselector__month"]').eq(1).click() //select entire month 

        // search
        cy.get('button[class*="App_submit-button"]').click() // open calendar

        // iterate From prices

        // iterate To prices
        cy.get('table[class*="BpkCalendarGrid"]').eq(1)
        .each(($el, index, $list)=> {
          cy.wrap($el).click()
        })

        //
      });
  });