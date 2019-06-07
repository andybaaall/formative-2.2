$(document).ready(function(){

  var tasks = [];

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

    document.getElementById('viewAllTaskItems').innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {

    var urgentClass;
    var urgentText;
      if (tasks[i].urgent === true) {
        urgentClass = 'urgent-text';
        urgentText = 'urgent!'
      } else {
        urgentClass = 'non-urgent-text'
        urgentText = 'not urgent'
      }

    var taskList = '<div class="row">';
      taskList += '<div class="col-12 mb-1">';
        taskList += '<h4 class="text-light">' + tasks[i].name + '</h4>';
      taskList += '</div>';
    taskList += '</div>';

    taskList += '<div class="row mb-1">';
      taskList += '<div class="col-8">';
        taskList += '<p class="text-light"> ' + tasks[i].description + '</p>'
      taskList += '</div>';
    taskList += '</div>';

    taskList += '<div class="row mb-1">';
      taskList += '<div class="col-8">';
        taskList += '<p class="text-light">due <strong>' + tasks[i].dueDate + '</strong></p>';
      taskList += '</div>';
    taskList += '</div>';

    taskList += '<div class="row mb-1">';
      taskList += '<div class="col-8">';
        taskList += '<p class="text-light">' + tasks[i].category + '</p>'
      taskList += '</div>';
    taskList += '</div>';

    taskList += '<div class="row mb-3">';
      taskList += '<div class="col-8">';
        taskList += '<p class="' +  urgentClass + '">this task is ' +  urgentText + '</p>'
      taskList += '</div>';
    taskList += '</div>';

    document.getElementById('viewAllTaskItems').innerHTML += taskList;

    }

  });

  $('.viewDayTasks').click(function(){

    if (this.innerText === 'M'){
      $('#viewDayTasksOverlay').show();

      $('.close-button').click(function(){
        $('#viewDayTasksOverlay').hide();
      });

      $('#viewDayTasksHeader').html('tasks for Monday:');

      document.getElementById('viewDayTasksItems').innerHTML = '';

      for (var i = 0; i < tasks.length; i++) {

        var urgentClass;
        var urgentText;
          if (tasks[i].urgent === true) {
            urgentClass = 'urgent-text';
            urgentText = 'urgent!'
          } else {
            urgentClass = 'non-urgent-text'
            urgentText = 'not urgent'
          }

        var mondayItem;
          if (tasks[i].dueDate === 'Monday'){
            mondayItem = 'monday item';
          }

        document.getElementById('viewDayTasksItems').innerHTML += mondayItem;
        // need to turn 'monday item' into html. 

      }
    } else if (this.innerText === 'T'){
      console.log('got a tues click');
    } else if (this.innerText === 'W'){
      console.log('got a wed click');
    } else if (this.innerText === 'T'){
      console.log('got a thurs click');
    } else if (this.innerText === 'F'){
      console.log('got a fri click');
    }











  });







  // show category buttons (loop, look for a category, break when you find it)

  // category btn click function goes here



});
