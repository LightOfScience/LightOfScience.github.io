// Publications & Books - Books Details on hover show JS : START
/* ################## USAGE #######################################################################################################
Hover element will have these attributes :: onmouseover="mouseover(this.id)"  onmouseleave="mouseleave(this.id);" id="element-id"
On hover controlled element will have these attributes :: id="element-id-content"
##################################################################################################################################*/ 
var mouseover =  function(btn_ID)
                {    
                    button = document.getElementById(btn_ID); 
                    btn_content_ID = btn_ID + "-content";                 
                    btn_content = document.getElementById(btn_content_ID);  
                    btn_content.classList.remove("slide-out");
                    btn_content.classList.add("slide-in");
                    //console.log(btn_ID + " over");
                }

var mouseleave = function(btn_ID)
                { 
                    button = document.getElementById(btn_ID);
                    btn_content_ID = btn_ID + "-content";
                    btn_content = document.getElementById(btn_content_ID);
                    btn_content.classList.remove("slide-in");
                    btn_content.classList.add("slide-out");
                    //console.log(btn_ID + " left");

                }
// Publications & Books - Books Details on hover show JS : END