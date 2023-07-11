var myFullpage = new fullpage('#fullpage', {});
AOS.init();
function startTime() {
    var today = new Date();
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
     'Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre', 'Diciembre'];
    var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = `${curWeekDay}, ${curDay} ${curMonth} ${curYear}`;
    document.getElementById("date").innerHTML = date;
    var time = setTimeout(
        function(){
            startTime()
        },500
    );
}
function checkTime(i){
    if(i < 10){
        i = "0" +i;
    }
    return i;
}
document.getElementById('Yes').onclick = function(e) {
    window.location.href="fin.html";
  }


