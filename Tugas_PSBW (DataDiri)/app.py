from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    # Data Kartu Rencana Studi
    mata_kuliah = [
        {"kode": "14823293", "nama": "Pengembangan Sistem Berbasis Web", "sks": 4},
        {"kode": "000802", "nama": "Bahasa Indonesia", "sks": 2},
        {"kode": "148233123", "nama": "Sistem Enterprise", "sks": 3},
        {"kode": "14823032", "nama": "Manajemen Sistem Informasi", "sks": 3},
    ]
    return render_template("index.html", mata_kuliah=mata_kuliah)

if __name__ == "__main__":
    app.run(debug=True)