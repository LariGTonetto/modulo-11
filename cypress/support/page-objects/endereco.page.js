class EnderecoPage {

    editarEnderecoFaturamento() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type('Larissa')
        cy.get('#billing_last_name').clear().type('Tonetto')
        cy.get('#billing_company').clear().type('Ebac')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        //.select('Brasil')
        //.check()
        cy.get('#billing_address_1').clear().type('Rua teste')
        cy.get('#billing_address_2').clear().type('123')
        cy.get('#billing_city').clear().type('São Paulo')
        cy.get('#select2-billing_state-container').click().type('São Paulo{enter}')
        cy.get('#billing_postcode').clear().type('01000100')
        cy.get('#billing_phone').clear().type('11996521214')
        cy.get('#billing_email').clear().type('email@teste.com')
        cy.get(':nth-child(2) > .button').click()

    }

    editarEnderecoEntrega() {
        // elementos + ações
    }

}

export default new EnderecoPage()
