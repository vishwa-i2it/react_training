// Tree-structured data for frontend tree view component
const productCatalogueData = [
  {
    id: "electronics",
    name: "Electronics",
    children: [
      {
        id: "laptops",
        name: "Laptops",
        children: [
          { id: "macbook", name: "MacBook Pro" },
          { id: "dell-xps", name: "Dell XPS 13" },
          { id: "hp-spectre", name: "HP Spectre x360" },
        ],
      },
      {
        id: "phones",
        name: "Phones",
        children: [
          { id: "iphone", name: "iPhone 15 Pro" },
          { id: "samsung-galaxy", name: "Samsung Galaxy S23" },
          { id: "pixel", name: "Google Pixel 8" },
        ],
      },
    ],
  },
  {
    id: "furniture",
    name: "Furniture",
    children: [
      {
        id: "chairs",
        name: "Chairs",
        children: [
          { id: "office-chair", name: "Ergonomic Office Chair" },
          { id: "gaming-chair", name: "Gaming Chair" },
        ],
      },
      {
        id: "tables",
        name: "Tables",
        children: [
          { id: "dining-table", name: "Dining Table" },
          { id: "coffee-table", name: "Coffee Table" },
        ],
      },
    ],
  },
  {
    id: "books",
    name: "Books",
    children: [
      {
        id: "fiction",
        name: "Fiction",
        children: [
          { id: "harry-potter", name: "Harry Potter Series" },
          {
            id: "lotr",
            name: "The Lord of the Rings",
            children: [
              { id: "sapiens", name: "Sapiens by Yuval Noah Harari" },
              { id: "atomic-habits", name: "Atomic Habits" },
            ],
          },
        ],
      },
      {
        id: "non-fiction",
        name: "Non-Fiction",
        children: [
          { id: "sapiens", name: "Sapiens by Yuval Noah Harari" },
          { id: "atomic-habits", name: "Atomic Habits" },
        ],
      },
    ],
  },
];
module.exports = productCatalogueData;
