
     function doscroll() {
        var myDiv = document.getElementById('newsdiv');
        myDiv.scrollTop = 0;
}
function doscroll2() {
        var myDiv = document.getElementById('eventsdiv');
        myDiv.scrollTop = 0;
}
    function on(){
        document.getElementById("pop").style.display = "block" ;
    }
    function off(){
        document.getElementById("pop").style.display = "none" ;
    }
    function srch(){
       document.getElementById("searchdiv").style.display= "block";
        document.getElementById("maindiv").style.display= "none";
        document.getElementById("ftr").style.display= "none";
        document.getElementById("bdy").className = "bg-light";
    }
    function srchclose(){
        document.getElementById("searchdiv").style.display= "none";
        document.getElementById("maindiv").style.display= "block";
        document.getElementById("ftr").style.display= "block";
        document.getElementById("bdy").className = "bg-dark";
    }
    function sitemapclick(){
        
        var vr = document.getElementById("sitemaphide");

        
        vr.style.display = 'block';
        
        
    }
  