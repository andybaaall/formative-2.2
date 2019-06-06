$(document).ready(function(){

  var tasks = [];

  // var viewMonBtn = $('#viewMonBtn');
  // var viewTuesBtn = $('#viewTuesBtn');
  // var viewWedBtn = $('#viewWedBtn');
  // var viewThursBtn = $('#viewThursBtn');
  // var viewFriBtn = $('#viewFriBtn');
  //
  // check your phone for the view by day buttons - passing this.text()

  $('#addTaskBtn').click(function(){
    $('#addTaskOverlay').show();
    $('.close-button').click(function(){
      $('#addTaskOverlay').hide();
    });

    // clears any existing values / placeholders
    $('#taskNameInput').val('');
    $('#taskDescriptionInput').val('');
    $('#taskCategoryInput').val('');
    $('#dueDateInput').val('');
    $('#urgentInput').val('');
    $('#taskCategoryInput').attr('placeholder' , 'task category ...');
    $('#dueDateInput').attr('placeholder' , 'due date ...');
    $('#urgentInput').attr('placeholder' , 'is it urgent?');

    // user inputs
    $('#dueDateDropdown').children().click(function(){
      var dueDatePlaceholderText = $(this).text();
      $('#dueDateInput').attr('placeholder' , dueDatePlaceholderText);
    });

    $('#taskCategoryDropdown').children().click(function(){
      var taskCategoryPlaceholderText = $(this).text();
      $('#taskCategoryInput').attr('placeholder' , taskCategoryPlaceholderText);
    });

    $('#urgentDropdown').children().click(function(){
      var urgentPlaceholderText = $(this).text();
      $('#urgentInput').attr('placeholder' , urgentPlaceholderText);
    });
  });

  $('#addTaskConfirmBtn').click(function(){
    var urgent = document.getElementById('urgentInput').getAttribute('placeholder');

    var urgentStatus;
    if (document.getElementById('urgentInput').getAttribute('placeholder') === 'yes (uh-oh)') {
      urgentStatus = true;
    } else {
      urgentStatus = false;
    }

    var newTask = {
      name : ($('#taskNameInput').val()),
      description : ($('#taskDescriptionInput').val()),
      dueDate : (document.getElementById('dueDateInput').getAttribute('placeholder')),
      category: (document.getElementById('taskCategoryInput').getAttribute('placeholder')),
      urgent : urgentStatus
    }

    tasks.push(newTask);

    $('#addTaskOverlay').hide();
  });

  $('#viewAllTasksBtn').click(function(){
    $('#viewAllTasksOverlay').show();

    $('.close-button').click(function(){
      $('#viewAllTasksOverlay').hide();
    });

    for (var i = 0; i < tasks.length; i++) {

      var taskList = $('#viewAllTaskItems');

      var urgentClass;
      var urgentText;
        if (tasks[i].urgent === true) {
          urgentClass = 'urgent-text';
          urgentText = 'urgent!'
        } else {
          urgentClass = 'non-urgent-text'
          urgentText = 'not urgent'
        }
      // need to get this stuff rendering !
      taskList.innerHTML += '<div class="row">';
        taskList.innerHTML += '<div class="col-12 mb-1">';
          taskList.innerHTML += '<h4 class="text-light">' + tasks[i].name + '</h4>';
        taskList.innerHTML += '</div>';
      taskList.innerHTML += '</div>';

      taskList.innerHTML += '<div class="row mb-1">';
        taskList.innerHTML += '<div class="col-8">';
          taskList.innerHTML += '<p class="text-light"> ' + tasks[i].description + '</p>'
        taskList.innerHTML += '</div>';
      taskList.innerHTML += '</div>';

      taskList.innerHTML += '<div class="row mb-1">';
        taskList.innerHTML += '<div class="col-8">';
          taskList.innerHTML += '<p class="text-light">due <strong>' + tasks[i].dueDate + '</strong></p>';
        taskList.innerHTML += '</div>';
      taskList.innerHTML += '</div>';

      taskList.innerHTML += '<div class="row mb-1">';
        taskList.innerHTML += '<div class="col-8">';
          taskList.innerHTML += '<p class="text-light">' + tasks[i].category + '</p>'
        taskList.innerHTML += '</div>';
      taskList.innerHTML += '</div>';

      taskList.innerHTML += '<div class="row mb-3">';
        taskList.innerHTML += '<div class="col-8">';
          taskList.innerHTML += '<p class="' +  urgentClass + '">this task is ' +  urgentText + '</p>'
        taskList.innerHTML += '</div>';
      taskList.innerHTML += '</div>';

    }

  });

  // show category buttons (loop, look for a category, break when you find it)

  // category btn click function goes here



});
