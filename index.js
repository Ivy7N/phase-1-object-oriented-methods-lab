// Define the constructor function in index.js
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  BoardMember.prototype.veto = function() {
    return "No, I must disagree";
  };
  BoardMember.prototype.approve = function(){
    return "You can do that!";
  }
  BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
  BoardMember.prototype.doCharity = function(){
    return "I like to help people.";
  }
  BoardMember.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber.";
  }
 
  const boardMember = new BoardMember("John Smith", "New York", "Lawyer");
  console.log(boardMember.name);      
  console.log(boardMember.homeState); 
  console.log(boardMember.training);  
  console.log(boardMember.veto());    
  console.log(boardMember.approve()); 
  console.log(boardMember.sayHi());
  console.log(boardMember.doCharity());
  console.log(boardMember.releaseProssStatement());
