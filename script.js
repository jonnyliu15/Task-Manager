let taskList = [];

var months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];

function dueDateOrganizer(date) {
  var day = date[3] + date[4];
  var month = date[0] + date[1];
  var year = date[6] + date[7] + date[8] + date[9];
  let dueDate = {
    dueDay: day,
    dueMonth: month,
    dueYear: year
  };
  return dueDate;
}

function addTask() {
  var x = document.getElementById("frm1");
  var name = x.elements[0].value;
  var dueDate = x.elements[1].value;
  if (dueDate[2] != "/") {
    dueDate = prompt("Please use the form mm/dd/yyyy"); 
  }
  let organizedDueDate = dueDateOrganizer(dueDate);
  let task = {
    name: name,
    dueDate: organizedDueDate
  };
  taskList.push(task);
  document.getElementById("tasks").innerHTML = " ";
  for (var i = 0; i < taskList.length; i++) {
    document.getElementById("tasks").innerHTML += taskList[i].name + " Due " + monthText(taskList[i].dueDate.dueMonth) + " " + taskList[i].dueDate.dueDay + "<br />";
  }
}

function removeTask() {
  var name = prompt("Please enter the task that you want to remove");
  var index = taskList.indexOf(name);
  taskList.splice(index, 1);
  document.getElementById("tasks").innerHTML = " ";
  for (var i = 0; i < taskList.length; i++) {
    document.getElementById("tasks").innerHTML += taskList[i].name + " Due " + monthText(taskList[i].dueDate.dueMonth) + " " + taskList[i].dueDate.dueDay + "<br />";
  }
}

function monthText(monthNum) {
  return months[monthNum - 1];
}




