

 $(function(){
  function buildMessage(message){
    var img = message.image ? `<img src= ${ message.image } > ` : "";
    var html = `<div class="message-box">
                  <div class="message-box__top-box">
                    <div class="message-box__top-box__user-box">
                      ${message.name}
                    </div>
                    <div class="message-box__top-box__time-box">
                      ${message.time}
                    </div>
                  </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                        ${img}
                    </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var fd = new FormData(this);
    var url = window.location.href +'';
    $.ajax({
      url: url,
      type: 'POST',
      data: fd,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(message){
      
      var html = buildMessage(message);
      $('.messages').append(html)
      $('#message_content').val("")
      $('.hidden').val("")
      $('#new_message')[0].reset();
 
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast'); 
    })
    .fail(function(){
      alert('エラー')

     })
    .always(() => {
      $(".form__submit").removeAttr("disabled");
    });
  });
});




