$(function(){
  
  function buildMember(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-id=${user.id} data-name=${user.name}>追加</div>
                </div>`
              return html;
  }
  function buildHtml(errormessage) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">
                      ${errormessage}
                  </p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-id="ユーザーのid" data-name="ユーザー名">追加</div>
                </div>`
              return html;
  }
   
    $('#user-search-field').on("keyup",function(e){
      e.preventDefault(); 
      var input = $("#user-search-field").val();
    
      $.ajax({
        url: '/users/search', 
        type: 'GET', 
        data: { keyword: input }, 
        dataType: 'json' 
      })
      .done(function(users){ 
        $('.user-search-result').empty();
        if (users.length !== 0) {
          users.forEach(function(user){
            var html = buildMember(user);
            $('.user-search-result').append(html);
          });
        }
        else {
          var errormessage= "一致するユーザーはいません"
          buildHtml(errormessage);
          $('.user-search-result').append(errormessage);
        };
      
      })
      .fail(function() {
        alert('error');
      });
    });
});
//追加
$(function(){
  function buildEntermember(hogename,hogeid) {
  var html = `<div class='chat-group-user'>
                <input name='group[user_ids][]' type='hidden' value=${hogeid}>
                <p class='chat-group-user__name'>${hogename}</p>
                <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
              </div>`
  return html;
  }
  $('.user-search-result').on('click' ,".user-search-add" , function(e){
    e.preventDefault();
    $(this).parent().remove();
    var hoge = this
    var hogename =$(hoge).data('name')
    var hogeid =$(hoge).data('id')
    var html = buildEntermember(hogename,hogeid);
    $('.user-toadd-member').append(html)
  });
  
});
//削除
$(function(){
  $('.user-toadd-member').on('click' ,".user-search-remove" , function(e){
    e.preventDefault();

    $(this).parent().remove();
  });
});
 