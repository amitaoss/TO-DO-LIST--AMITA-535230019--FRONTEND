$(document).ready(function() {
    $("#task-form").submit(function(event) {
        event.preventDefault();
        let taskInput = $("#task-input").val();
        if (taskInput !== "") {
            let taskItem = $("<li></li>");
            let checkbox = $("<input type='checkbox' class='complete-checkbox'>");
            let taskText = $("<span class='task-text'>" + taskInput + "</span>"); 
            let deleteButton = $("<button class='delete'>Delete</button>"); 
            
            
            taskItem.append(checkbox).append(taskText).append(deleteButton);
            $("#task-list").append(taskItem);
            $("#task-input").val("");
        }
    });

    // menandai tugas yg sdh selesai
    $("#task-list").on("change", ".complete-checkbox", function() {
        $(this).siblings(".task-text").toggleClass("completed");  
    });

    // menghapus tugas
    $("#task-list").on("click", ".delete", function() {
        $(this).parent().fadeOut(function() {  
            $(this).remove();
        });
    });

    // filter semua tugas
    $("#filter-all").click(function() {
        $("#task-list li").fadeIn();  // menampilkan semua tugas
    });

    // filter tugas yg sdh selesai
    $("#filter-completed").click(function() {
        $("#task-list li").fadeOut();
        $("#task-list li .completed").parent().fadeIn();  // hanya menampilkan tugas yg sdh selesai
    });

    // filter tugas yg blm selesai
    $("#filter-incomplete").click(function() {
        $("#task-list li").fadeOut();
        $("#task-list li .completed").parent().fadeOut();  // hanya menampilkan tugas yg blm selesai
        $("#task-list li:not(:has(.completed))").fadeIn();
    });
});
