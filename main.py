from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit_application():
    try:
        # Get form data
        first_name = request.form.get('firstName')
        last_name = request.form.get('lastName')
        email = request.form.get('email')
        phone = request.form.get('phone')
        market = request.form.get('market')
        job_position = request.form.get('jobPosition')

        # Handle file upload
        resume = request.files.get('resume')
        if resume:
            # Save the resume file
            resume_filename = f"{first_name}_{last_name}_resume.pdf"
            resume.save(os.path.join('uploads', resume_filename))

        # Print application data (for testing)
        print(f"New Application: {first_name} {last_name} - {email} - {job_position}")

        # Here you would save to database
        # save_to_database(form_data)

        return jsonify({
            'success': True,
            'message': 'Application submitted successfully!'
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Error submitting application'
        }), 500


if __name__ == '__main__':
    # Create uploads directory if it doesn't exist
    os.makedirs('uploads', exist_ok=True)

    # Run the app
    app.run(debug=True, port=5000)