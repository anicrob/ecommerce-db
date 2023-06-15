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
  foreignKey: 'product_id',
  through: {
    model: ProductTag
  },
  as: 'tag_data'
});
 
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: {
    model: ProductTag
  },
  as: 'product_data'
});
 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
