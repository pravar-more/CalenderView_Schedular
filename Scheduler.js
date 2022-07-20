var newJSON=[1,2,3,4,5,6];
var oldJSON=[];
var newJSONN;
var weekDays=["Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
/*var data = JSON.parse('[{"subjectName":"Proffessional Development", "teacherName":"Doe"},'+
        '{"subjectName":"OOPS", "teacherName":"Smith"},'+
        '{"subjectName":"Data Structures", "teacherName":"Smith"},'+
        '{"subjectName":"Algorithms", "teacherName":"Smith"},'+
        '{"subjectName":"Computer Networks", "teacherName":"Smith"},'+
        '{"subjectName":"Operating System", "teacherName":"Smith"},'+
        '{"subjectName":"Technical English", "teacherName":"Smith"},'+
        '{"subjectName":"Enviromental", "teacherName":"Smith"},'+
        '{"subjectName":"Shev Pav", "teacherName":"Vadapav"},{"key":"1234abc","value":"test"} ]');*/
function OnLoad() {
    getRequestListAndFillTable();
}
function getRequestListAndFillTable()
{
        fetch("data.json")
             .then(response=>response.json())
             .then(function(data){
                newJSON=data;
                populateRows(document.getElementById("table_body"));
             })
             .catch(function(err)
             {
                console.log(err);
             });

}
function populateRows(tbody)
{
    var headings = document.getElementsByClassName("reqListHead");
    var rows = document.getElementById("table_body").querySelectorAll("tr");
    for(var i=0;i<newJSON.length;i++)
    {
        var row=rows[i];
        if (oldJSON.length == i || row == undefined) row = tbody.insertRow(i);
        else if (_.isEqual(newJSON[i], oldJSON[i])) continue;
        row.innerHTML = "";

        for (j = 0; j < headings.length; j++) 
        {
            var tdHTML = populateCols(newJSON[i], i, headings[j].innerHTML);
            var tdClass="tooltip";

            if(j==0)
            {
                row.innerHTML+="<td class='days'>"+tdHTML+"</td>";
                continue;
            }
            row.innerHTML += "<td class = '" + tdClass + "' id='"+i+(j-1)+"' onclick='updtTbl("+i+","+(j-1)+")'>" + tdHTML + "</td>";
            //console.log(row.innerHTML);
        }
    }
}
function populateCols(rowdata, rowIdx, colHead) {
    //console.log(rowdata[0].subjectName);
    switch (colHead) {
        case "Days": return weekDays[rowIdx];
        case "8:00 AM - 9:00 AM"    : return rowdata[0].subjectName + "<br>" + rowdata[0].teacherName;
        case "9:00 AM - 10:00 AM"   : return rowdata[1].subjectName + "<br>" + rowdata[1].teacherName;
        case "10:00 AM - 11:00 AM"  : return rowdata[2].subjectName + "<br>" + rowdata[2].teacherName;
        case "11:00 AM - 12:00 PM"  : return rowdata[3].subjectName + "<br>" + rowdata[3].teacherName;
        case "12:00 PM - 1:00 PM"   : return rowdata[4].subjectName + "<br>" + rowdata[4].teacherName;
        case "1:00 PM - 2:00 PM"    : return rowdata[5].subjectName + "<br>" + rowdata[5].teacherName;
        case "2:00 PM - 3:00 PM"    : return rowdata[6].subjectName + "<br>" + rowdata[6].teacherName;
        case "3:00 PM - 4:00 PM"    : return rowdata[7].subjectName + "<br>" + rowdata[7].teacherName;
        case "4:00 PM - 5:00 PM"    : return rowdata[8].subjectName + "<br>" + rowdata[8].teacherName;

        /*case "Value": return '<input type = "text" id="' + rowdata.key + '" value="' + rowdata.value + '" oninput="updateCfg(\'' + rowdata.key + '\');">';*/
        default: return "Column Undefined in PopulateCols";
    }
}
function Refresh() {
    getRequestListAndFillTable();
}
function updtTbl(day,period)
{
    openUpdater();
    var submitter=document.getElementById("submit");
    submitter.innerHTML="";
    submitter. innerHTML+="<button onclick='Reset("+day+","+period+")' >Reset </button><br><br><br>";
    submitter. innerHTML+="<button id='Cancel' onclick='Canceller("+day+","+period+")' >Cancel Lecture </button><br><br><br>";
    submitter.innerHTML+="<button onclick='JsonSaver("+day+","+period+")'> Schedule Lecture</button>";

    //location.href="./form.html";
   //window.open("form.html");
}
function JsonSaver(day,period)
{
    //var subject=document.getElementById('subjectName').value;
    //var teacher=document.getElementById('teacherName').value;
    var cell=document.getElementById(""+day+period);
    //cell.innerHTML=subject+"<br>"+teacher;
    cell.classList.add('Schedule');
    cell.classList.remove('LectureCancel');
    //alert(subject+teacher+" "+day+" "+period);
    //newJSON[day][period].schedule="0";
    //newJSON[day][period].subjectName=subject;
    //newJSON[day][period].teacherName=teacher;
    closeUpdater();
}
function Canceller(day,period)
{
    var Cancel=document.getElementById(""+day+period);
    Cancel.classList.add('LectureCancel');
    Cancel.classList.remove('Schedule');
    //var cell=document.getElementById(""+day+period);
    //Cancel.classList.remove('LectureCancel');
    //alert(subject+teacher+" "+day+" "+period);
    //newJSON[day][period].schedule="1";
    closeUpdater();
}
function Reset(day,period)
{
    var Cancel=document.getElementById(""+day+period);
    Cancel.classList.remove('LectureCancel');
    Cancel.classList.remove('Schedule');
    closeUpdater();
}
// ----------------------- popup ------------------
function openUpdater()
{
    var updater=document.getElementById("popup");
    if(updater==null) return
    updater.classList.add('active');
    overlay.classList.add('active');
}
function closeUpdater()
{
    var updater=document.getElementById('popup');
    if(updater==null)return
    updater.classList.remove('active');
    overlay.classList.remove('active');
}
