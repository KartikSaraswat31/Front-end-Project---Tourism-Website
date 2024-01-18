function Confirm_box(){
    var x=confirm("Are you sure you want to submit the form?")
    if(x==true){
        alert("You have been registerd successfully\nPlease login to proceed further")
        return true


    }
    else return false
}

