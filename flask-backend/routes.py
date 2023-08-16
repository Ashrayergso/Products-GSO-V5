```python
from flask import Flask, jsonify, request, render_template, redirect, url_for
from models import Product, db

app = Flask(__name__)

@app.route('/')
def home():
    products = Product.query.all()
    return render_template('index.html', products=products)

@app.route('/product/<int:product_id>')
def product(product_id):
    product = Product.query.get_or_404(product_id)
    return render_template('product.html', product=product)

@app.route('/product/new', methods=['GET', 'POST'])
def new_product():
    if request.method == 'POST':
        name = request.form['name']
        number = request.form['number']
        cost = request.form['cost']
        link = request.form['link']
        image = request.form['image']
        new_product = Product(name, number, cost, link, image)
        db.session.add(new_product)
        db.session.commit()
        return redirect(url_for('home'))
    return render_template('new_product.html')

@app.route('/product/<int:product_id>/edit', methods=['GET', 'POST'])
def edit_product(product_id):
    product = Product.query.get_or_404(product_id)
    if request.method == 'POST':
        product.name = request.form['name']
        product.number = request.form['number']
        product.cost = request.form['cost']
        product.link = request.form['link']
        product.image = request.form['image']
        db.session.commit()
        return redirect(url_for('product', product_id=product.id))
    return render_template('edit_product.html', product=product)

@app.route('/product/<int:product_id>/delete', methods=['POST'])
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
```