// Function to add new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.innerHTML =
      '<i class="fas fa-check"></i> ' +
      taskText +
      ' <i class="fas fa-trash-alt"></i>';
    taskList.appendChild(newTask);
    taskInput.value = "";

    // Event listener to mark task as completed when clicked
    newTask.addEventListener("click", function () {
      if (!newTask.classList.contains("completed")) {
        newTask.classList.add("completed");
      } else {
        newTask.classList.remove("completed");
      }
    });
  } else {
    alert("Please enter a task!");
  }
}

// Event listener for Add Task button
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Event listener for theme selection
document.getElementById("themeSelect").addEventListener("change", function () {
  var theme = this.value;
  document.documentElement.setAttribute("data-theme", theme);

  // Show/hide theme icons based on selected theme
  var themeIcons = document.querySelector(".theme-icons");
  themeIcons.style.opacity = 1;
  if (theme === "light") {
    document.getElementById("moonIcon").style.opacity = 1;
    document.getElementById("sunIcon").style.opacity = 0;
  } else {
    document.getElementById("moonIcon").style.opacity = 0;
    document.getElementById("sunIcon").style.opacity = 1;
  }
});

// Function to update date and time
function updateDateTime() {
  var dateTimeContainer = document.getElementById("dateTime");
  var currentDate = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  var formattedDate = currentDate.toLocaleDateString(undefined, options);
  dateTimeContainer.textContent = formattedDate;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Update date and time every second
setInterval(updateDateTime, 1000);

// Interesting facts array
var facts = [
  "The Eiffel Tower can be 15 cm taller during the summer, due to thermal expansion.",
  "You Can't Directly See a Black Hole. ...",
  "A black hole could fit in your pocket.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  "if you fell into a stellar-size black hole, you could turn into human spaghetti."
];

// Function to display a random fact
function showRandomFact() {
  var factText = document.getElementById("factText");
  var randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
}

// Event listener for Show Fact button
document
  .getElementById("showFactBtn")
  .addEventListener("click", showRandomFact);
