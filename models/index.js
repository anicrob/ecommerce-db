// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//one to many

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
 });

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// many to many

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'reader_id',
  through: {
    model: ProductTag
  }
});
 
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'reader_id',
  through: {
    model: ProductTag
  } 
});
 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
