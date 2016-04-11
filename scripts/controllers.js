   // Home Controller
app.controller('homeCtrl', function(){
      this.title = 'Home Page';
      this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsum, adipisci eaque accusamus consectetur dolores qui! Commodi vel aliquam delectus tenetur labore aut repudiandae nemo. Delectus quasi nesciunt ipsum, ex!'
   })
   
   // About Controller
   .controller('aboutCtrl', ['coffees', 'coffeeService', function(coffees, coffeeService){
      this.name = coffeeService.name;
      this.title = 'About Page';
      this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui aliquam, autem nobis doloremque officiis vero facere distinctio tempore illum quibusdam. Explicabo quas perferendis voluptatum perspiciatis, reiciendis iste blanditiis exercitationem voluptatibus.'
      this.coffees = coffees;
   }])

   // Contact Controller
   .controller('contactCtrl', function(){
      this.title = 'Contact Page';
      this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsum, adipisci eaque accusamus consectetur dolores qui! Commodi vel aliquam delectus tenetur labore aut repudiandae nemo. Delectus quasi nesciunt ipsum, ex!'
   })
;
