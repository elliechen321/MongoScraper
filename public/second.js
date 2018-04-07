$.getJSON("/savedArticles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#savedArticles").append(`<h2 class="post-title" data-id=${data[i]._id}>${data[i].title}</h2>
    <p class="post-meta"><a href=${data[i].link}>${data[i].link}</a></p>
    <button id="saveButton" class="btn btn-outline-success my-2 my-sm-0" data-id=${data[i]._id} data-link=${data[i].link} data-title=${data[i].title} type="submit">Save Article</button><hr>`);
    }
})
