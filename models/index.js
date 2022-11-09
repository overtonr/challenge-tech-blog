const User = require('./User');
const Blog = require('./Blogs');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User,{
    foreignKey: 'user_id'
});

Comment.belongsTo(Blog,{
    foreignKey: 'post_id'
});



module.exports = { User, Blog, Comment };