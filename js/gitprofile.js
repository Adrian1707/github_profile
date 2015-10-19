$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    // Replace this with a Github access token that you can generate as explained here https://help.github.com/articles/creating-an-access-token-for-command-line-use/
    var url = 'https://api.github.com/users/' + $('input.username').val() + "?access_token=" + access_token;

    var template = $('template').html();

    var failure = function() {
      $('.container').prepend("User not found")
    }

    var always = function() {
      $('input.username').val('');
      }

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
    }).fail(failure).always(always);
  });
});
