from flask import Flask, request, render_template, redirect, url_for, session, flash
from flask_mysqldb import MySQL
import os
from app.validator import addmemberval
# from passlib.hash import pbkdf2_sha256
from datetime import datetime

# Initialize flask
app = Flask(__name__)
app.secret_key = 'TzALB4eJ89*Ib!bn0aH28w9MFSy2iuu1!0olxkHADk2gq&PpMQ'

# Connect to MYSQL database
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1212'
app.config['MYSQL_DB'] = 'kkhc'

# Initialize the Connection
mysql = MySQL(app)

# Auth

def auth():
    try:
        username, password = session["username"], session["password"]
    except Exception:
        return False
    else:
        cur = mysql.connection.cursor()
        cur.execute("SELECT password FROM admin WHERE username = %s", (username,))
        dbpassword = cur.fetchall()
        dbpassword = dbpassword[0][0]
        cur.close()
        if password == dbpassword:
            return True
        return False

# Home page
@app.route('/')
def home():
    return "Home page"

# Admin Home
@app.route("/admin")
def admin():
    if auth():
        return f"hello, {session['username']}"
    else:
        return redirect(url_for("login"))

# Login for Admins
@app.route("/login", methods = ["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        cur = mysql.connection.cursor()
        cur.execute("SELECT password FROM admin WHERE username = %s", (username,))
        admin = cur.fetchall()
        cur.close()
        # password = pbkdf2_sha256.hash(password)
        try:
            dbpassword = admin[0][0]
            
        except Exception:
            return "Username not found!"
        else:
            if password == dbpassword:
                session["username"] = username
                session["password"] = password
                return redirect(url_for("admin"))
            else:
                return f"passwrod incorrect!"
    return render_template("login.html")


# Add new member
@app.route('/addmember', methods=['GET', 'POST'])
def addmember():
    if auth():        
        if request.method == "POST":
            title = request.form["title"]
            firstname = request.form["f_name"]
            middlename = request.form["m_name"]
            lastname = request.form["l_name"]
            birthdate = request.form["dob"]
            sex = request.form["gender"]
            phone = request.form['phone']
            doba = request.form["doba"]
            subcity = request.form['subcity']
            woreda = request.form['woreda']
            house_number = request.form['h_no']
            other_name = request.form['other_name']
            cur0 = mysql.connection.cursor()
            cur0.execute("INSERT INTO members (title, name, gender, dob, phone_number, sub_city, woreda, house_number, direction, baptism_date) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", (title, firstname, gender, dob, phone, subcity, woreda, house_number, other_name, doba))
            mysql.connection.commit()
            cur0.close()
            flash('Form submitted successfully!', 'success')
            
            return redirect(url_for("addmember"))
    else:
        return redirect(url_for("login"))
    return render_template('addmember.html')

# Add new member
@app.route('/addmembernew', methods=['GET', 'POST'])
def addmembernew():
    if auth():        
        if request.method == "POST":
            try:
                title = request.form["title"]
                f_name = request.form["f_name"]
                m_name = request.form["m_name"]
                l_name = request.form["l_name"]
                sex = request.form["sex"]
                dob = request.form["dob"]
                handicap = request.form['handicap']            
                description = request.form["description"]
                subcity = request.form['subcity']
                district = request.form['district']
                house_no = request.form['house_no']
                other_name = request.form['other_name']
                phone = request.form['phoneNumber1']
                homephone = request.form['phoneNumber2']
                email = request.form["email"]
                bap_date = request.form["bap_date"]
                bap_where = request.form["bap_where"]
                mem_date = request.form["mem_date"]
            except KeyError as e:
                return f"Missing or incorrect form field: {e}"
            except Exception as e:
                return f"An error occurred: {e}"

            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO memberinfo (title, firstname, middlename, lastname, sex, birthdate, subcity, district, homeno, neighborhood, Homephone, personalphone, email, handicap, handicaptype) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", (title, f_name, m_name, l_name, sex, dob, subcity, district, house_no, other_name, homephone, phone, email, handicap, description))
            mysql.connection.commit()
            cur.execute("SELECT id FROM memberinfo WHERE firstname = %s AND middlename = %s AND lastname = %s ORDER BY id DESC", (f_name, m_name, l_name))
            userid = cur.fetchall()
            userid = userid[0][0]
            cur.close()
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO churchinfo (memberid, baptizmdate, baptizedwhere, dateofmembership) VALUES (%s, %s, %s, %s)", (userid, bap_date, bap_where, mem_date))
            mysql.connection.commit()
            cur.close()
            return 'Form submitted successfully!'
    else:
        return redirect(url_for("login"))
    return render_template('addmembernew.html')
# Add new children
@app.route("/newchild", methods=["GET", "POST"])
def newchild():
    return "newchild"

# Members list
@app.route('/members')
def members():
    if auth():
        today = datetime.today()
        today = today.strftime('%Y-%m-%d')
        cur = mysql.connection.cursor()
        cur.execute("SELECT id, title, name FROM members")
        members = cur.fetchall()
        cur.close()
        return render_template('members_list.html', members = members, today = today)
    else:
        return redirect(url_for("login"))

# Children list
@app.route("/children")
def children():
    return "Children list"
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)

