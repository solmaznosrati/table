document.write("<div>"); 

var teacherName=[ "NAME" ,"mohammad","hossein ","sasan ","ghasem ","milad " ];
var teacherLastName=[ "lAST NAME","hashemi","enayati"," safari"," basaki"," dehyami" ];

var i=0;
while(i<teacherName.length){
    while(i<teacherLastName.length){
        while(i<teacherLastName.length){
 document.write("<table>");
document.write("<tr>");
document.write("<td>");
if(i==0)
    {document.write("ID");}
else{document.write(i);}
document.write("</td>");
document.write("</tr>");
document.write("</table>");
document.write("<table>");
document.write("<tr>");
document.write("<td>");
document.write(teacherName[i]);
if(i<teacherName.length){
document.write("</td>");
document.write("</tr>");
document.write("</table>");}
document.write("<table>");
document.write("<tr>");
document.write("<td>");
document.write(teacherLastName[i]);
if(i<teacherName.length){
document.write("</td>");
document.write("</tr>");
document.write("</table>");}

i++;
}}}


document.write("</div>"); 
