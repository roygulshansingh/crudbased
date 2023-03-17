var arr_cus=[]
function add_click(){
    let id=document.getElementById('txtId').value;
    let name=document.getElementById('txtName').value;
    let address=document.getElementById('txtAddress').value;
    let mobile_no=document.getElementById('txtMobileNo').value;
    cus={"id":id,"name":name,"address":address,'mobileno':mobile_no}
    arr_cus.push(cus);
    //alert('Customer Added Sucessfully')
    display_data ();

}
function search_click(){
    let id=document.getElementById('txtId').value;
    let  i=arr_ids.indexOf(id);
    if(i==-1){
        alert('Id not found')
    }
    else
    {
        document.getElementById('txtName').value=arr_names[i];
        document.getElementById('txtAddress').value=arr_address[i];
        document.getElementById('txtMobileNo').value=arr_mobile_nos[i];
    
    }
}
function delete_click(){
    let id=document.getElementById('txtId').value;
    let  i=arr_ids.indexOf(id);
    if(i==-1){
        alert('Id not found')
    }
    else
    {
        arr_ids.splice(i,1);
        arr_names.splice(i,1);
        arr_address.splice(i,1);
        arr_mobile_nos.splice(i,1);
        alert('Customer Deleted Successfully');
        display_data();

    }
}
function modify_click(){
    let id=document.getElementById('txtId').value;
    let  i=arr_ids.indexOf(id);
    if(i==-1){
        alert('Id not found')
    }
    else
    {
        arr_names[i]=document.getElementById('txtName').value;
        arr_address[i]=document.getElementById('txtAddress').value;
        arr_mobile_nos[i]=document.getElementById('txtMobileNo').value;
        display_data();
    
    }
}
function showall_click(){
    display_data ();
}
var cur_index=0;
function first_click(){
cur_index=0;
show_data_by_index(cur_index);
resetColor();
var cus_row=document.getElementById(cur_index.toString())
cus_row.style.backgroundColor='green';
}
function last_click(){
    cur_index=arr_ids.length-1;
    show_data_by_index(cur_index);
    resetColor();
    var cus_row=document.getElementById(cur_index.toString())
    cus_row.style.backgroundColor='green';
    }
    function previous_click(){
        if(cur_index!=0)
            cur_index--;
        show_data_by_index(cur_index);
        resetColor();
        var cus_row=document.getElementById(cur_index.toString())
        cus_row.style.backgroundColor='green';
        }
        function resetColor(){
            for(let i=0;i<arr_ids.length;i++){
                var cus_row=document.getElementById(i.toString())
                cus_row.style.backgroundColor='white'; 
            }
        }
        function next_click(){
            if(cur_index!=arr_ids.length-1)
                cur_index++;
            show_data_by_index(cur_index);
            resetColor();
            var cus_row=document.getElementById(cur_index.toString())
            cus_row.style.backgroundColor='green';
            }
function show_data_by_index(i){
    document.getElementById('txtId').value=arr_ids[i];
    document.getElementById('txtName').value=arr_names[i];
    document.getElementById('txtAddress').value=arr_address[i];
    document.getElementById('txtMobileNo').value=arr_mobile_nos[i];
}
function display_data (){
    var div_table=document.getElementById('div_table')
   var myTable=`<table>
   <tr>
       <th>ID</th>
       <th>Name</th>
       <th>Address</th>
       <th>Mobile No</th>
   </tr>`
   for(let i=0;i<arr_cus.length;i++){
    myTable+=`<tr id="${i.toString()}">
   <th>${arr_cus[i].id}</th>
   <th>${arr_cus[i].name}</th>
   <th>${arr_cus[i].address}</th>
   <th>${arr_cus[i].mobileno}</th>
</tr>`

   }
   
myTable+='</table>'

//    div_table.innerText="I am trying to modify inner Text od Div";
div_table.innerHTML=myTable;
}