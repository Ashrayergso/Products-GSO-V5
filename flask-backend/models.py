```python
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    product_number = db.Column(db.String(120), unique=True, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    link = db.Column(db.String(500), nullable=False)
    image = db.Column(db.String(500), nullable=True)

    def __repr__(self):
        return '<Product %r>' % self.name
```