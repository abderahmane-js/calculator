const monitor = document.getElementById("display") ;

function display(x) {
   
   monitor.textContent =monitor.textContent + ("")+ x ; 
}

function clearDisplay() {
    monitor.textContent = " " ;
}
function calculate() {
   try{ monitor.textContent = eval(monitor.textContent) ;}
  catch(error){monitor.textContent = "error"};
  result = eval(monitor.textContent) ;
   if (result == Infinity){monitor.textContent = "error"}
}
  



