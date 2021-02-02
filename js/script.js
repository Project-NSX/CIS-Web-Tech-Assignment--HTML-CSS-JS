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
    var gallery = '{"images" :[{"URL" : "img/gallery/Tiger.jpg", "caption" : "Tiger"},{"URL": "img/gallery/Altay-tank.png","caption": "Altay"},{"URL": "img/gallery/Centurion.JPG","caption": "Centurion"},{"URL": "img/gallery/Challenger2.jpg","caption": "Challenger 2"},{"URL": "img/gallery/M60A3.jpg","caption": "M60A3"},{"URL": "img/gallery/Merkava4.jpg","caption": "Merkava 4"},{"URL": "img/gallery/PT-76.jpg","caption": "PT-76"},{"URL": "img/gallery/RandomTank.jpg","caption": "Random Tank"},{"URL": "img/gallery/RandomTank2.jpg","caption": "Another Random Tank"},{"URL": "img/gallery/RandomTank3.jpg","caption": "And Another Random Tank"},{"URL": "img/gallery/T90A.jpg","caption": "T90A"},{"URL": "img/gallery/TankForSale.jpg","caption": "Tank For Sale"}]}';
    var galleryImages = JSON.parse(gallery);
    for (i = 0; i < gallery.length ; i++)
    {
        var imgSrc = galleryImages.images[i].URL;
        var capSrc = galleryImages.images[i].caption;

        var containerDiv = document.createElement("div");
        containerDiv.setAttribute("class", "containerDiv");
        
        var imgLink = document.createElement('a');
        imgLink.setAttribute("target", "_blank");
        var myImg = document.createElement("IMG");
        myImg.setAttribute("src", imgSrc);
        myImg.setAttribute("class", "galleryImg");
        myImg.setAttribute("width", "300px");
        myImg.setAttribute("height", "200px");
        imgLink.appendChild(myImg);
        imgLink.href = imgSrc;

        var cap = document.createElement("p");      
        var text = document.createTextNode(capSrc);
        myImg.setAttribute("alt", capSrc);

        cap.setAttribute("class", "imgCap");
        cap.appendChild(text);

        containerDiv.appendChild(imgLink);
        containerDiv.appendChild(cap);

        document.getElementById("htmlDiv").appendChild(containerDiv);
    }
}
