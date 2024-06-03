// Implement debounce

function debounce(callback, time){
    let intervalID;

    return function(){
        if(intervalID){ 
            clearTimeout(id)
        }

         intervalID = setTimeout(()=> {
            callback()
        }, time)

    }

}