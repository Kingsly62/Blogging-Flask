import email
from flask import Flask, redirect, render_template, request, url_for
import mysql.connector

API_KEY = "http://api.quotable.io/random"
app = Flask(__name__)

conn = mysql.connector.connect(host="remotemysql.com",
                               user="MBlhVgFB01",
                               password="ksW9IhF4NV",
                               database="MBlhVgFB01")

cursor = conn.cursor()


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


@app.route('/login')
def login():
    return render_template('Login.html')


@app.route('/login_validate', methods=['GET', 'POST'])
def login_validate():
    email = request.form.get('email')
    password = request.form.get('password')

    cursor.excute(
        """SELECT * FROM `users` WHERE `email` LIKE '{}' AND `password` LIKE '{}'"""
        .format(email, password))

    users = cursor.fetchall()
    if len(users) > 0:

        return render_template('home.html')
    else:
        return render_template('Login.html')


@app.route('/add_user', methods=['POST'])
def add_user():
    name = request.form.get('uname')
    email = request.form.get('uemail')
    password = request.form.get('upassword')

    cursor.excute(
        """INSERT INTO `users`, (`user_id`,`name`,`email`,`password`) VALUES(NULL,'{}','{}','{}')"""
        .format(name, email, password))

    conn.commit()
    return "User registered successfully"


@app.route('/post')
def post():
    return render_template('create_post.html')


if __name__ == "__main__":
    app.run(debug=True)
