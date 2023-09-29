it.only('get weather information for all cities', ()=>{
    //1st request: GET locations 
    cy.request({
          method: 'GET',
          url: 'https://reqres.in/api/users?page=2'
       
    }).then((resp)=>{
        const location = resp.body
        return location
    })
        .then((location)=>{

            for(let i=0; i< location.length; i++){
            //2nd request for the first location/city
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?page='+location[i].title
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body[0]).to.have.property('title', location[i].title)
            })

        }
    })
})