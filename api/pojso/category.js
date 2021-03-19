
class Category {
    constructor(name, description, iconUrl) {
        this.name = name;
        this.description = description;
        this.iconUrl = iconUrl;
        this.createdDate = new Date(Date.now());
    }
};

module.exports = Category;