//Business Logic

function TodoList(task1, task2, task3){
  this.task1 = task1;
  this.task2 = task2;
  this.task3 = task3;
}

$(document).ready(function() {
  $('#createList').click(function() {
    var task1 = $('#firstTask').val();
    var task2 = $('#secondTask').val();
    var task3 = $('#thirdTask').val();
    var newTodoList = new TodoList(task1, task2, task3);
    $('#firstTask, #secondTask , #thirdTask' ).val("");
    for(x in newTodoList){
       $('.notDone').append("<li><input type='checkbox' id='" + newTodoList[x] + "'><label for='" + newTodoList[x] + "'> &emsp;" + newTodoList[x] + "</label></li>" );
     }
  $('#moveToCompleted').click(function() {
    var inputCheck = $("input").is(":checked");
    if(inputCheck === true){
      $(":checked").parent().remove();
    }
  });
  });
});


//User input Logic
