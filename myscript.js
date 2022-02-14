var taskWindow;

function createPopUp(windowToOpen = 'add-task.html'){
    return window.open(windowToOpen,'popup','width=600,height=600');
    
}


function closePopUp(taskWindow){
    taskWindow.close();
    return false
}

function areYouSure(action){
    
    if(action = "Start Over"){
        var result = confirm("Are you sure you want to " + action + "? This cannot be undone!");
    }else{
        var result = confirm("Are you sure you want to " + action + "? you cannot edit your entry once you submit!");
    }
    if (result) {
        console.log("I still need to write this code...");
        closePopUp(createPopUp());
    }
    
}

