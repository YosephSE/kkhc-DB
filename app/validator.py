def addmemberval():
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
    except Exception:
        return False
    else:
        return [title, f_name, m_name, l_name, sex, dob, subcity, district, house_no, other_name, homephone, phone, email, handicap, description]