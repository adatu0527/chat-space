class GroupsController < ApplicationController
  before_action :set__group, only: [:edit,:update]
  def index
    
  end

  def new
   @group = Group.new
   @group.users << current_user

  end

  def create
    @group = Group.new(group_params)
  
    if @group.save()
      redirect_to root_path, notice: 'グループを作成しました'

    else
      render :new
    end
  end

  def edit
    
    
  end
   
  def update
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: 'グループを編集しました'
    else
      render :edit
    end
  end
private 
  def group_params
 params.require(:group).permit(:name, {:user_ids => []})
  end

  def set__group
    @group = Group.find(params[:id])
  end
end
