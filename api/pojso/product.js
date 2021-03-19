
class Product {
    constructor(name, categoryId, description, tagsCSV, imageUrl) {
        this.name = name;
        this.categoryId = categoryId;
        this.description = description;
        this.tagsCsv = tagsCSV;
        this.imageUrl = imageUrl;
        this.createdDate = new Date(Date.now());
    }
};

module.exports = Product;