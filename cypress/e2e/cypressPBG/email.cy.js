/// <reference types="cypress" />



    context('email', () => {
        const serverId = '3e3fvc7i'
        const serverDomain = '3e3fvc7i.mailosaur.net'
        const emailAddress = 'CP-qwe@' + serverDomain

        let emailWeryfikacjaLink

        it('should be possible to take mail', () => {
            cy.visit('https://polsatboxgo.pl/zadanie-zmiany-hasla')
            cy.wait(1000)

            cy.get('.sc-61m640-10 > .kmqjwy')
                cy.contains('Tak, przejdź do serwisu').click({ force: true })
            

            cy.get('.sc-11crcco-6').type(emailAddress)
            cy.get(':nth-child(3) > .vteimq-0').click({ force: true })

            cy.mailosaurGetMessage(serverId, {
                sentTo: emailAddress
            }).then(email => {
                cy.log(email.subject)
                emailWeryfikacjaLink = email.html.links[0].href
            })
        })

        it('Resetuje haslo', () => {
            cy.visit(emailWeryfikacjaLink)
            cy.wait(1000)

            cy.get('.sc-61m640-10 > .kmqjwy')
                cy.contains('Tak, przejdź do serwisu').click({ force: true })
        })
    })
// })