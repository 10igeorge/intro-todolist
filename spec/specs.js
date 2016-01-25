describe('TodoList', function() {
  it("will create a task list based on user input", function() {
    var newTodoList = new TodoList("Buy groceries", "Go to the doctor", "Shower");
    expect(newTodoList.task1).to.equal("Buy groceries");
    expect(newTodoList.task2).to.equal("Go to the doctor");
    expect(newTodoList.task3).to.equal("Shower");
  });
});


// Example Spec below:

// describe('functionname', function(){
//   it('first spec here...', function(){
//     expect(functionname(parameter)).to.equal('placeholder');
//   });
// });
