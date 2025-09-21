from flask import Flask, render_template

app = Flask(__name__)

session = []

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/save/<num>")
def up(num):
    session.append(num)
    print(session)
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
