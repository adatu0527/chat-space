json.id           @message.id
json.name         @message.user.name
json.content      @message.content
json.image        @message.image.url
json.time         @message.created_at.to_s(:datetime)