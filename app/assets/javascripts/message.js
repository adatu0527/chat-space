$(function(){
  function buildMessage(message){

    var img = message.image ? `<img src= ${ message.image } > ` : "";
    var html = `<div class="message-box">
                  <div class="message-box__top-box" data-id=${message.id}>
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

  function reloadMessages()  {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    last_message_id = $('.message-box__top-box').last().data('id');
    console.log(last_message_id)
    $.ajax({
      url: 'api/messages',
      type: 'GET',
      dataType: 'json',
      data: {id: last_message_id }
    })
    .done(function(messages){
      var insertHTML = '';
      messages.forEach(function (message) {
        insertHTML = buildMessage(message);
      $('.messages').append(insertHTML);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      });
    })
    .fail(function() {
      alert('自動更新に失敗しました');
      
    });
  }
};
  
  setInterval(reloadMessages, 5000);
   
  });

