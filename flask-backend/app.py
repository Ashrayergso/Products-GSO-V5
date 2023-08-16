```python
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

import routes

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/product/<int:id>')
def product(id):
    return render_template('product.html', id=id)

@app.route('/product/new', methods=['GET', 'POST'])
def new_product():
    if request.method == 'POST':
        return redirect(url_for('home'))
    return render_template('new_product.html')

@app.route('/product/<int:id>/edit', methods=['GET', 'POST'])
def edit_product(id):
    if request.method == 'POST':
        return redirect(url_for('product', id=id))
    return render_template('edit_product.html', id=id)

if __name__ == '__main__':
    app.run(debug=True)
```