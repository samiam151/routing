   // Coffee service
app.service('coffeeService', function(){
   this.name = 'coffeeService';
   this.coffeeList = [
      {name: 'Cinnamon', strength: 1},
      {name: 'Light', strength: 2},
      {name: 'City', strength: 3},
      {name: 'Full City', strength: 4},
      {name: 'Dark', strength: 5},
      {name: 'French', strength: 6},
      {name: 'Italian', strength: 7}
   ];
});
