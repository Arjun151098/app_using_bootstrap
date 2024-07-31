var enter = document.getElementById("btnentry")



var update = document.querySelector("#updatebtn")

console.log(update)

enter.addEventListener("click",formadd);


var row=1;

function formadd() {
    var id = document.getElementById("eid").value
      var name = document.getElementById("ename").value
     var age = document.getElementById("age").value
    var city =  document.getElementById("city").value
      

    mydelete(id,name,age,city)

    if( !id || !name ||  !age || !city) {
        alert("Enter missing details")

        

        return ;
    }


    if(age < 18) {
        alert("your age is below")
        return ;
    }
             
              var table =  document.getElementById("tabledetails")
               var newRow = table.insertRow(row)


               var cell0= newRow.insertCell(0);
               var cell1= newRow.insertCell(1);
              var cell2 = newRow.insertCell(2);
              var cell3 =  newRow.insertCell(3);
              var cell4 =  newRow.insertCell(4);
              


              cell0.innerHTML=id;
              cell1.innerHTML=name;
              cell2.innerHTML=age;
              cell3.innerHTML=city;
              cell4.innerHTML= '<buton type="button" class="btn btn-warning btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">update</buton>';


  
              


              row++;
    

}



function mydelete(id,name,age,city) {

console.log(id,name,age,city)


}