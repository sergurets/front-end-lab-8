function Employee(obj) {
  var timeIn;
  var timeOut;
  var company = '';
  var history = "";
  this.name = obj.name;
  this.age = obj.age;
  var salary = obj.salary;
  this.primarySkill = obj.primarySkill;

  this.getHistory = function() {
    return history;
  }

  this.hire = function(val, timeHired) {
    company = val;
    timeIn = +timeHired;
    history = history + this.name + " is hired to " + company + " in " + timeHired;
    return history;
  }

  this.fire = function(val, timeFired) {
    if (val === company) {
      timeOut = +timeFired;
      history = history + "\n" + this.name + " is fired from " + company + " in " + timeFired;
      company = '';
    } else {
      console.log("Error")
    }
  }

  this.getSalary = function() {
    return salary;
  }

  this.setSalary = function(value) {
    if (checkSalary(value, salary)) {
      history = history + `\nchange salary from ${salary} to ${value}`;
      this.salary = value;
    } else {
      history = history + `\ntry to change salary from ${salary} to ${value}`;
    }
  }

  this.getWorkTimeInSeconds = function() {
    let date = +new Date();
    return (date - timeIn) / 1000;
  }

  function checkSalary(value, salary) {
    return (salary < value)
  }
}

function Company(obj) {
  let employee = [];
  let date = new Date();
  this.name = obj.name;
  this.owner = obj.owner;
  let history = this.name + " was created in " + date;
  this.maxCompanySize = obj.maxCompanySize;

  function findSalary() {
    var numb = 0;
    var min = employee[0].getSalary();
    for (var i = 0; i < employee.length; i++) {
      if (employee[i].getSalary() < min) {
        numb = i;
        min = employee[i].getSalary();
      }
    }
    return numb;
  }

  this.addNewEmployee = function(empl) {
    if (!(empl instanceof Employee) ) console.log('Please try to add Employee instance');
    else {
      if (employee.length+1 > this.maxCompanySize) {
        this.removeEmployee(findSalary());
      }
      date = new Date();
      history = history + "\n" + empl.name + " starts working at " + this.name + " in " + date;
      empl.hire(this.name, date);
      employee.push(empl);
      
    }
    checkSize = function(value) {
      return (employee.length > value)
    }
    this.getEmployees = function() {
      return employee;
    }
    this.getHistory = function() {
      return history;
    }
    this.removeEmployee = function(numb) {
      let date = new Date();
      employee[numb].fire(this.name, date);
      history = history + "\n" + employee[numb].name + " ends working at " + this.name + " in " + date;
      employee.splice(numb, 1);
      return history;
    }
    this.getAverageSalary = function() {
      var averSalary = 0;
      for (var i = 0; i < employee.length; i++) {
        averSalary = averSalary + employee[i].getSalary();
      }
      return averSalary / employee.length;
    }

    this.getAverageAge = function() {
      var averAge = 0;
      for (var i = 0; i < employee.length; i++) {
        averAge = averAge + employee[i].age;
      }
      return averAge / employee.length;
    }

    this.getFormattedListOfEmployees = function() {
      let str = '';
      for (var i = 0; i < employee.length; i++) { 
        str = str + `${employee[i].name} -  works in ${this.name} ${employee[i].getWorkTimeInSeconds()} seconds\n`
      }
      return str;
    }
  }
}