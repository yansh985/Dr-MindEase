from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('home_page.html')

@app.route('/contact')
def contact_us():
    return render_template('contact.html')

@app.route('/score')
def score():
    return render_template('score.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/game1')
def game1():
    return render_template('game1.html')

@app.route('/game2')
def game2():
    return render_template('game2.html')

@app.route('/game3')
def game3():
    return render_template('game3.html')


if __name__ == '__main__':
    app.config['DEBUG'] = True
    app.run()


