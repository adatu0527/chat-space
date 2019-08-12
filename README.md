##userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|e-mail|string|unique: true|

###Association
- has_many :messages
- has_many :groups

##messageテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message|text|null: false|
|image|string|null: false|



###Association
- belongs_to :group
- belongs_to :user


##groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false|
|group_name|string|c|


###Association
- has_many :users
- has_many :messages


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user