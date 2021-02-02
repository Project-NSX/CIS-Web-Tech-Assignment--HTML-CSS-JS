function myFunction() 
{
    if (document.getElementById("bodyOne")) 
    {
        document.getElementById("bodyOne").id = "bodyTwo";
        document.getElementById("sectionOne").id = "sectionTwo";
        document.getElementById("buttonOne").id = "buttonTwo";
    } else 
    {
        document.getElementById("bodyTwo").id = "bodyOne";
        document.getElementById("sectionTwo").id = "sectionOne";
        document.getElementById("buttonTwo").id = "buttonOne";
    }
}
    
    function setup()
{ 
    var galleryItems = '{"images" :[{"URL" : "img/gallery/Tiger.jpg", "caption" : "Tiger"},{"URL": "img/gallery/Altay-tank.png","caption": "Altay"},{"URL": "img/gallery/Centurion.JPG","caption": "Centurion"},{"URL": "img/gallery/Challenger2.jpg","caption": "Challenger 2"},{"URL": "img/gallery/M60A3.jpg","caption": "M60A3"},{"URL": "img/gallery/Merkava4.jpg","caption": "Merkava 4"},{"URL": "img/gallery/PT-76.jpg","caption": "PT-76"},{"URL": "img/gallery/RandomTank.jpg","caption": "Random Tank"},{"URL": "img/gallery/RandomTank2.jpg","caption": "Another Random Tank"},{"URL": "img/gallery/RandomTank3.jpg","caption": "And Another Random Tank"},{"URL": "img/gallery/T90A.jpg","caption": "T90A"},{"URL": "img/gallery/TankForSale.jpg","caption": "Tank For Sale"}]}';
    var gallery = JSON.parse(galleryItems);
    for (i = 0; i < galleryItems.length ; i++)
    {
        var imgSrc = gallery.images[i].URL;
        var capSrc = gallery.images[i].caption;
        var containerDiv = document.createElement("div");
        containerDiv.setAttribute("class", "containerDiv");
        var containerDiv = "<div class='containerDiv'>" + '<a href="' + imgSrc + '" target="_blank">' + '<img src="' + imgSrc + '"' + 'class="galleryImg"' + ' width="300px" height="200px"/></a>' + '<p class="imgCap">' + capSrc + '</p></div>' 
        var imgFinal = document.createTextNode(containerDiv);
        document.getElementById("htmlDiv").innerHTML += containerDiv;
    }


}
