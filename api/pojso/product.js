
class Product {
    constructor(name, categoryId, description, imageUrl) {
        this.name = name;
        this.categoryId = categoryId;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdDate = new Date(Date.now());
    }
};

module.exports = Product;