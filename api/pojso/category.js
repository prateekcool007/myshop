
class Category {
    constructor(name, iconUrl) {
        this.name = name;
        this.iconUrl = iconUrl;
        this.createdDate = new Date(Date.now());
    }
};

module.exports = Category;