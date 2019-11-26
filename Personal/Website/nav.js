document.write('<div class="navigationBar">\
    <a href="contact.html" class="navigationButton">Contact Me</a>\
    <a href="critique.html" class="navigationButton">Critique</a>\
    <a href="links.html" class="navigationButton">Links</a>\
    <a href="projects.html" class="navigationButton">Projects</a>\
    <a href="about.html" class="navigationButton">About</a>\
    <a href="index.html" class="navigationButton">Home</a>\
</div>\
</br>'
);

//console.log(location.pathname);
var filename = location.pathname.split("/").pop();
$('a[href="' + filename + '"]').addClass("active");
if (filename == "raytracer.html" || filename == "personbest.html" || filename == "coursescheduler.html")
{
    $('a[href="projects.html"]').addClass("active");
}
if (filename == "")
{
    $('a[href="index.html"]').addClass("active");
}