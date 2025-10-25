/*Name this external file gallery.js*/
/*Name this external file gallery.js*/

function upDate(previewPic){document.getElementById('image').style.backgroundImage = "url('"+previewPic.src+"')";document.getElementById('image').innerHTML =previewPic.alt;}
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
function pickImage(){options=["fort_in_woods.png","istockphoto-1419410282-612x612.jpg","pexels-pixabay-158063.jpg","colourful.jpg","high_altitude_aerial_view_above_cotton_soft_cloud_tops_glowing_in_golden_hour_light-full.jpg","pexels-alena-koval-233944-886521.jpg"]
randomImg="images/"+options[Math.floor(Math.random()*options.length)];
img=document.querySelector("#header_img")
img.setAttribute("src",randomImg)
img.setAttribute("alt","")}




function setImages(){options=["fort_in_woods.png","istockphoto-1419410282-612x612.jpg","pexels-pixabay-158063.jpg","colourful.jpg","high_altitude_aerial_view_above_cotton_soft_cloud_tops_glowing_in_golden_hour_light-full.jpg","pexels-alena-koval-233944-886521.jpg"]
currentImages=document.querySelectorAll(".flex img")
for(var i=0; i<currentImages.length; i++)
{console.log("Image"+i)
randomImg="images/"+options[Math.floor(Math.random()*options.length)];
currentImages[i].src=randomImg;currentImages[i].setAttribute("tabindex","0");currentImages[i].setAttribute("border-width","15px");}}




  
	

	function unDo(){document.getElementById('image').innerHTML='Hover over an image below to display here.';document.getElementById('image').style.backgroundImage = 'url("")';}
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
	
