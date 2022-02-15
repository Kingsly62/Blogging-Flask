from flask import Flask, redirect, render_template, request, url_for

API_KEY = "http://api.quotable.io/random"
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/blog')
def blog():
    return render_template('blog.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/signup')
def signup():
    return render_template('signup.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')
    return "The email is {} and the password is {}".format(email, password)


@app.route('/post')
def post():
    return render_template('create_post.html')


if __name__ == "__main__":
    app.run(debug=True)
