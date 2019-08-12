##usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,index: true|


###Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

##messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|message|text||
|image|string||
|group_id|references|null: false, foreign_key: true|


###Association
- belongs_to :group
- belongs_to :user


##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string| |


###Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :group_users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user