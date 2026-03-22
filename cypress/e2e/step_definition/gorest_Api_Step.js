import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given("visit to Gorest url",()=>{
     cy.request({
            method:"GET",
            url:`${baseurl}/public/v2/users`,
        })
        .then((Response)=>{
            expect(Response.status).to.eq(200);
        })
})