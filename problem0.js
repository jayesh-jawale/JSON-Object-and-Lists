// Problem 0 : Part A (15 mins):
// Playing with JSON object's Values:

// Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
// Write a code to get the below details of Fluffyy so that
// I can take him to vet.

var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
   
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   
   // 1. Add height and weight to Fluffy
   => cat.height = '20';
      cat.weight = '65';

   
   //2. Fluffy name is spelled wrongly. Update it to Fluffyy
   => cat.name = 'Fluffyy';

   
   //3. List all the activities of Fluffyy’s catFriends.
   => console.log(cat.catFriends[0].activities);

   
   //4. Print the catFriends names.
   => console.log(cat.catFriends[0].name+ " " +cat.catFriends[1].name);

   
   //5. Print the total weight of catFriends
   => var add = cat.catFriends.reduce(function(a,b) {
      return a + b.weight
   }, 0)
   console.log(add)

   
   //6. Print the total activities of all cats (op:6)
   => console.log(cat.activities+" "+cat.catFriends[0].activities+" "+cat.catFriends[1].activities);

   
   //7. Add 2 more activities to bar & foo cats
   => var activity1 = ['eat fish', 'eat chiken']
      cat.catFriends[0].activities.push(activity1)
   
      var activity2 = ['meditate', 'post naps']
      cat.catFriends[1].activities.push(activity2)
      console.log(cat);


   //8. Update the fur color of bar
   =>   cat.catFriends[0].furcolor = 'black';
        console.log(cat)

//----------------------------------------------------------------------------------------------------------

// Problem 0 : Part B (15 mins):
// Iterating with JSON object’s Values

// Above is some information about my car. As you can see, I am not the best driver.
// I have caused a few accidents.
// Please update this driving record so that I can feel better about my driving skills.

var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }

   //1. Loop over the accidents array. Change atFaultForAccident from true to false.
   =>   for(let i=0; i<myCar.accidents.length; i++){
        myCar.accidents[i].atFaultForAccident = 'false';
        }
        console.log(myCar.accidents)

    //2. Print the dated of my accidents
    =>  for(let i=0; i<myCar.accidents.length; i++){
        console.log(myCar.accidents[i].date)
        }

