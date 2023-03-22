class EnderecoPage {

    editarEnderecoFaturamento(nome,sobrenome,empresa,pais,endereco ,cidade,estado,cep,telefone,email){
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').click().clear().type(endereco)
        cy.get('#billing_city').click().clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado).get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').click().clear().type(cep)
        cy.get('#billing_phone').click().clear().type(telefone)
        cy.get('#billing_email').click().clear().type(email)
        cy.get('#terms').click()
        cy.get('#place_order').click()

    }

}

export default new EnderecoPage()