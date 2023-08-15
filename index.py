from flask import Flask, request, render_template, redirect, url_for, session, flash
from flask_mysqldb import MySQL
import datetime

app = Flask(__name__)
app.secret_key = 'secretkey'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1212'
app.config['MYSQL_DB'] = 'kkhc'

mysql = MySQL(app)

@app.route('/addmember', methods=['GET', 'POST'])
def addmember():
    # if 'email' not in session or session.get('role', '') != 'adm':
    #     return redirect(url_for('home'))
    if request.method == "POST":
        title = request.form["title"]
        name = request.form["f_name"]+ ' ' + request.form["m_name"]+ ' ' + request.form["l_name"]
        dob = request.form["dob"]
        gender = request.form["gender"]
        phone = request.form['ccode'] + request.form['phone']
        subcity = request.form['subcity']
        woreda = request.form['woreda']
        house_number = request.form['h_no']
        other_name = request.form['other_name']
        # photo = request.files['photo'].read()
        cur0 = mysql.connection.cursor()
        cur0.execute("INSERT INTO members (title, name, gender, dob, phone_number, sub_city, woreda, house_number, direction) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)", (title, name, gender, dob, phone, subcity, woreda, house_number, other_name))
        mysql.connection.commit()
        cur0.close()
        # cursor = mysql.connection.cursor()
        # insert_query = "INSERT INTO photos (photo, user_id) VALUES (%s, %s)"
        # cursor.execute(insert_query, (photo, user_id))
        # mysql.connection.commit()
        # cursor.close()
        flash('Form submitted successfully!', 'success')
        
        return render_template('addmember.html')
    return render_template('addmember.html')

@app.route('/members')
def members():
    # if 'email' not in session or session.get('role', '') != 'adm':
    #     return redirect(url_for('home'))
    today = datetime.date.today()
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM members")
    members = cur.fetchall()
    cur.close()
    cur1 = mysql.connection.cursor()
    cur1.execute("SELECT photo FROM photos")
    photos = cur1.fetchall()
    cur.close()
    return render_template('members_list.html', members = members, today = today, photos = photos)

if __name__ == "__main__":
    app.run(debug=True)

