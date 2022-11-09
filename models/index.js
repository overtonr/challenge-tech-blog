const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Comment does not exist without blog
Blog.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Blog,{
    //through user?
    foreignKey: 'post_id'
});



module.exports = { User, Blog, Comment };