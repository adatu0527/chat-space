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
|message|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|image|string|ooooo|

###Association
- belongs_to :group
- belongs_to :user


##groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false|
|group_name|string|null: false|


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