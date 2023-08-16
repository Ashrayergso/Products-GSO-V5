```python
from openpyxl import Workbook
from models import Product, db

def create_product(data):
    new_product = Product(
        name=data['name'],
        product_number=data['product_number'],
        cost=data['cost'],
        link=data['link'],
        image=data['image']
    )
    db.session.add(new_product)
    db.session.commit()

def read_product(product_id):
    product = Product.query.get(product_id)
    return product

def update_product(product_id, data):
    product = Product.query.get(product_id)
    product.name = data['name']
    product.product_number = data['product_number']
    product.cost = data['cost']
    product.link = data['link']
    product.image = data['image']
    db.session.commit()

def delete_product(product_id):
    product = Product.query.get(product_id)
    db.session.delete(product)
    db.session.commit()

def export_list(products):
    wb = Workbook()
    ws = wb.active
    ws.append(['Name', 'Product Number', 'Cost', 'Link', 'Image'])
    for product in products:
        ws.append([product.name, product.product_number, product.cost, product.link, product.image])
    wb.save('product_list.xlsx')
```