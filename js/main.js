$(document).ready(function(){

  var tasks = [];

  var addTaskBtn = $('#addTaskBtn');

  var viewTaskBtn = $('#viewTaskBtn');

  var viewMonBtn = $('#viewMonBtn');
  var viewTuesBtn = $('#viewTuesBtn');
  var viewWedBtn = $('#viewWedBtn');
  var viewThursBtn = $('#viewThursBtn');
  var viewFriBtn = $('#viewFriBtn');

  addTaskBtn.click(function(){
    $('#addTaskOverlay').show();
    $('#closeButton').click(function(){
      $('#addTaskOverlay').hide();
    });

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

    // confirm button - passes the inputs into an object, and pushes that object into an array
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
      console.log(tasks);
    });
  });

  viewTaskBtn.click(function(){
    // ... show the overlay (you need to code the overlay)
    // the overlay contains a list of tasks, defined herin
  });

  viewMonBtn.click(function(){
    // ... show the overlay (you need to code the overlay)
    // ... the overlay contains a list of tasks, defined herein
  });
  viewTuesBtn.click(function(){
    // ... show the overlay (you need to code the overlay)
    // ... the overlay contains a list of tasks, defined herein
  });
  viewWedBtn.click(function(){
    // ... show the overlay (you need to code the overlay)
    // ... the overlay contains a list of tasks, defined herein
  });
  viewThursBtn.click(function(){
    // ... show the overlay (you need to code the overlay)
    // ... the overlay contains a list of tasks, defined herein
  });
  viewFriBtn.click(function(){
    // ... show the overlay (you need to code the overlay)
    // ... the overlay contains a list of tasks, defined herein
  });

  // show category buttons (loop, look for a category, break when you find it)

  // category btn click function goes here



});
