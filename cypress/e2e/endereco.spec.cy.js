/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Ana', 'Banana', 'Google', 'Brasil', 'Rua Bananal', '123', 'Santos', 'São Paulo', '11222333', '11987654321', 'banana@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});