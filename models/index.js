const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User,{
    foreignKey: 'user_id',
    //Comment does not exist without blog
    onDelete: 'CASCADE'
});

Comment.belongsTo(Blog,{
    foreignKey: 'post_id'
});



module.exports = { User, Blog, Comment };