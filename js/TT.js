var newJSON=[1,2,3,4,5,6];
var oldJSON=[];
var newJSONN;
var weekDays=["Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
var data = JSON.parse('[{"subjectName":"Proffessional Development", "teacherName":"Doe"},'+
        '{"subjectName":"OOPS", "teacherName":"Smith"},'+
        '{"subjectName":"Data Structures", "teacherName":"Smith"},'+
        '{"subjectName":"Algorithms", "teacherName":"Smith"},'+
        '{"subjectName":"Computer Networks", "teacherName":"Smith"},'+
        '{"subjectName":"Operating System", "teacherName":"Smith"},'+
        '{"subjectName":"Technical English", "teacherName":"Smith"},'+
        '{"subjectName":"Enviromental", "teacherName":"Smith"},'+
        '{"subjectName":"Shev Pav", "teacherName":"Vadapav"},{"key":"1234abc","value":"test"} ]');
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
    submitter.innerHTML+="<button onclick='JsonSaver("+day+","+period+")'> Submit</button>";
    //location.href="./form.html";
   //window.open("form.html");
}
function JsonSaver(day,period)
{
    var subject=document.getElementById('subjectName').value;
    var teacher=document.getElementById('teacherName').value;
    var cell=document.getElementById(""+day+period);
    cell.innerHTML=subject+"<br>"+teacher;
    cell.classList.remove('LectureCancel');
    //alert(subject+teacher+" "+day+" "+period);
    newJSON[day][period].subjectName=subject;
    newJSON[day][period].teacherName=teacher;
    closeUpdater();
}
function Canceller(day,period)
{
    var Cancel=document.getElementById(""+day+period);
    Cancel.classList.add('LectureCancel');
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

// ----------------------- cascade select ------------------

{
function alertDataNotInserted(){
alert("Data Not Inserted");}

function faculty_val(){
    document.getElementById('faculty_msg').innerHTML = (faculty[faculty.selectedIndex].text)
}

function course_val(){
    document.getElementById('cid_msg').innerHTML = (course[course.selectedIndex].text)
}

var subjectObject = {
    "1": {
     "csea": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "cseb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "ita": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "itb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "etca": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "etcb": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "ei": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "mec": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "civil": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"]
   },
   "2":{
     "ei": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "etca": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "etcb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "csea": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "cseb": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "ita": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "civil": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "mech": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"]
 
   },
   "3": {
     "csea": ["ACR3C1","CER3C2","CER3C3","CER3C4","CER3G1","CER3L1","SCR3S3","CER3V3"],
     "cseb": ["ACR3C1","CER3C2","CER3C3","CER3C4","CER3G1","CER3L1","SCR3S3","CER3V3"],
     "ita": ["AIR3C1","ITR3C2","ITR3C3","ITR3C4","ITR3G1","ITR3L1","SIR3S3","ITR3V3"],
     "itb": ["AIR3C1","ITR3C2","ITR3C3","ITR3C4","ITR3G1","ITR3L1","SIR3S3","ITR3V3"],
     "etca": ["ATR3C1","ETR3C2","ETR3C3","ETR3C4","ETR3G1","ETR3L1","SER3S3","ETR3V3"],
     "etcb": ["ATR3C1","ETR3C2","ETR3C3","ETR3C4","ETR3G1","ETR3L1","SER3S3","ETR3V3"],
     "ei": ["AER3C1","EIR3C2","EIR3C3","EIR3C4","EIR3G1","EIR3L1","SER3S3","EIR3V3"],
     "mech": ["AMR3C1","MER3C2","MER3C3","MER3C4","MER3G1","MER3L1","SMR3S3","MER3V3"],
     "civil": ["AVR3C1","VLR3C2","VLR3C3","VLR3C4","VLR3G1","VLR3L1","SVR3S3","VLR3V3"]
   },
   "4": {
     "csea": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "cseb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "ita": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "itb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "etca": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "etcb": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "ei": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "mec": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "civil": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"]
   },
   "5": {
     "csea": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "cseb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "ita": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "itb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "etca": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "etcb": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "ei": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "mec": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "civil": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"]
   },
   "6": {
     "csea": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "cseb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "ita": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "itb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "etca": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "etcb": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "ei": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "mec": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "civil": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"]
   },
   "7": {
     "csea": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "cseb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "ita": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "itb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "etca": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "etcb": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "ei": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "mec": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "civil": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"]
   },
   "8": {
     "csea": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "cseb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "ita": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "itb": ["AMR1C1","ACR1C2","MER1C3","ETR1C4","MER1C5","SSR1S1","BER1V1"],
     "etca": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "etcb": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "ei": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "mec": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"],
     "civil": ["AMR2C1","APR2C2","MER2C3","EIR2C4","COR2C5","SSR2S2","BER2V2"]
   }
 };

window.onload = function() {
    var semSel = document.getElementById("semester");
    var branchSel = document.getElementById("branch");
    var courseSel = document.getElementById("course");
    for (var x in subjectObject) {
      semSel.options[semSel.options.length] = new Option(x, x);
    }
    semSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      courseSel.length = 1;
      branchSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        branchSel.options[branchSel.options.length] = new Option(y, y);
      }
    }
    branchSel.onchange = function() {
      //empty Chapters dropdown
      courseSel.length = 1;
      //display correct values
      var z = subjectObject[semSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        courseSel.options[courseSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }
}