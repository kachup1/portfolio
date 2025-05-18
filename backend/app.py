
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
from flask_cors import CORS


load_dotenv()  # Load variables from .env

app = Flask(__name__)
CORS(app)


# Email config
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
app.config['MAIL_DEFAULT_SENDER'] = os.getenv("MAIL_USERNAME")

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"error": "All fields are required"}), 400

    try:
        msg = Message(subject=f"New Message from {name}",
                      recipients=[os.getenv("MAIL_USERNAME")],
                      body=f"From: {name}\nEmail: {email}\n\nMessage:\n{message}")
        mail.send(msg)
        return jsonify({"success": True}), 200
    except Exception as e:
        print("Email failed:", e)
        return jsonify({"error": "Failed to send email"}), 500

@app.route('/api/hello')
def hello():
    return {"message": "Hello from Flask!"}

if __name__ == '__main__':
    app.run(debug=True)
