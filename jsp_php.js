function hi() 
{
    var url = "jsp_php.jsp";     
    ajax(url);
}

function hello()
{
    var url = "jsp_php.php";
    ajax(url);
}

function ajax(url)
{
    if(window.XMLHttpRequest){  
    request = new XMLHttpRequest();  
    }  
    else 
    if(window.ActiveXObject)
    {  
        request = new ActiveXObject("Microsoft.XMLHTTP");  
    }  
    try  
    {  
        request.onreadystatechange = get_information;  
        request.open("GET",url,true);  
        request.send();  
    }  
    catch(e)  
    {  
        alert("Unable to connect to server");  
    } 
}
  
function get_information()
{  
    if(request.readyState == 4)
    {  
        var requested_value = request.responseText;  
        document.getElementById('display').innerHTML = requested_value;  
    }  
}