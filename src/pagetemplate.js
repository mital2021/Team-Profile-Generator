// module.exports = templateData => {

//   const {name, role, id, email, officeNumber,github,school}= templateData;
  
function pagetemplate(data) {

return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile Generator</title>
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron">
         <h1 class = "text-center text-danger"> My Team </h1>
        </div>
      </div> 
    </div>
   
  
    <div class= "container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
   
    <div class="card data">    
      <div class="card-header">
        <h2>${data.name}</h2>  
        <h2><i class="far fa-user"></i>${data.role}</h2>
      </div>
      <div class="card-body">
       <ul class= "list-group">
          <li class="list-group-item">ID:  ${data.id}</li>
          <li class="list-group-item">Email:  ${data.email}</li>
          <li class="list-group-item">Office Number:  ${data.officeNumber}</li>
       </ul>
       </div>
    </div>

   
    <div class="card data">
      <div class="card-header">
       <h2>${data.engName}</h2>  
        <h2><i class="far fa-user"></i>${data.engRole}</h2>
      </div>
      <div class="card-body">
        <ul class= "list-group">
          <li class="list-group-item">ID:  ${data.engId}</li>
          <li class="list-group-item">Email:  ${data.engEmail}</li>
          <li class="list-group-item">Github  ${data.github}</li>
        </ul>
      </div>
    </div>
    
    <div class="card data">
      <div class="card-header">
       <h2>${data.intName}</h2>  
       <h2><i class="far fa-user"></i> ${data.intRole}</h2>
      </div>
      <div class="card-body">
        <ul class= "list-group">
          <li class="list-group-item">ID:  ${data.intId} </li>
          <li class="list-group-item">Email:  ${data.intEmail}</li>
          <li class="list-group-item">School:  ${data.school}</li>
        </ul>
      </div>
    </div>

        </div>
      </div>
    </div>


  </body>
  </html>
`;  


}
module.exports = { pagetemplate };