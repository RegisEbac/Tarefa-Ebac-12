/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/nome-funcionliada.page'
const dadosLogin= require('../fixtures/perfil.json')
const dadosEndereco=require('../fixtures/endereco.json')
describe('Funcionalidade pagina de produtos', () => {
    



    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it.only('Deve selecionar 4 itens da pagina de produtos', () => {
      cy.addProduto('Ingrid Running Jacket','XS','White',4)
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
      cy.get('.showlogin').click()
      
      cy.login(dadosLogin.usuario, dadosLogin.senha)
      EnderecoPage.editarEnderecoFaturamento(
        dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
      )
      cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')
        
        //TODO 
    });


})