const maxWidth = 10

const productName = {
  label: 'Product Name',
  key: 'product',
  type: 'text',
  span: 7,
  value: ''
}

const tags = {
  label: 'Tags',
  key: 'tags',
  type: 'text',
  span: 3,
  value: ''
}

const vendor = {
  label: 'Vendor',
  key: 'vendor',
  span: 5,
  type: 'select',
  options: ['Vendor A', 'Vendor B']
}

const productType = {
  label: 'Product Type',
  key: 'productType',
  span: 5,
  type: 'select',
  options: ['Type 1', 'Type 2', 'Type 3']
}

const description = {
  label: 'Description',
  key: 'description',
  span: 10,
  type: 'text',
  value: ''
}

const sku = {
  label: 'sku',
  key: 'sku',
  type: 'text',
  span: 2,
  value: ''
}
const stockLevel = {
  label: 'Initial Stock Level',
  key: 'stockLevel',
  type: 'text',
  span: 2,
  value: ''
}
const costPrice = {
  label: 'Cost Price',
  key: 'costPrice',
  type: 'number',
  span: 2,
  value: null
}
const wholesalePrice = {
  label: 'Wholesale Price',
  key: 'wholesalePrice',
  type: 'number',
  span: 2,
  value: null
}

const retailPrice = {
  label: 'Retail Price',
  key: 'retailPrice',
  type: 'number',
  span: 2,
  value: null
}

export const InventoryForm = {
  legend: 'Add To Inventory',
  rows: [
    {
      span: maxWidth,
      fields: [productName, tags]
    },
    {
      span: maxWidth,
      fields: [vendor, productType]
    },
    {
      span: maxWidth,
      fields: [description]
    },
    {
      span: maxWidth,
      fields: [sku, stockLevel, costPrice, wholesalePrice, retailPrice]
    }

  ]
}
