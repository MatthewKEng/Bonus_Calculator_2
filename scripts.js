var atticus = {
  name: "Atticus",
  id: "2405",
  salary: 47000,
  rating: 3
};
var jem = {
  name: "Jem",
  id: "62347",
  salary: 63500,
  rating: 4
};
var boo = {
  name: "Boo",
  id: "11435",
  salary: 54000,
  rating: 3
};
var scout = {
  name: "Scout",
  id: "6243",
  salary: 74750,
  rating: 5
};

var employees = [atticus, jem, boo, scout];

function calculator() {
  for (var i = 0; i < employees.length; i++) {
    var rate = 0;
    switch (employees[i].rating) {
    case 5: rate = .1;
      break;
    case 4: rate = .06;
      break;
    case 3: rate = .04;
      break;
    default: rate = 0;
      break;
  }
  if (employees[i].id.length == 4) {
    rate += .05;
  }

    if (employees[i].salary > 65000) {
      rate -= .01;
    }

    if (employees[i].rate > .13) {
      rate = .13;
    }

    var bonus = Math.round(rate * employees[i].salary);
    var person = {
    name: employees[i].name,
    bonusPercent: rate,
    totSalary: employees[i].salary + bonus,
    bonusAmt: bonus
  };
    console.log(person);
  };
  }


calculator();
