from PyInquirer import prompt, Separator

class QuestionPrompter:
    def __init__(self):
        self.questions = [
            {
                'type': 'input',
                'name': 'title',
                'message': 'What is the project title:',
                'validate': lambda val: val.strip() != '' or 'Title cannot be empty'
            },
            {
                'type': 'input',
                'name': 'description',
                'message': 'What is the project description:',
                'validate': lambda val: val.strip() != '' or 'Description cannot be empty'
            },
            {
                'type': 'input',
                'name': 'installation',
                'message': 'Installation Instructions:',
                'default': 'pip install -r requirements.txt'
            },
            {
                'type': 'input',
                'name': 'usage',
                'message': 'Usage Information:'
            },
            {
                'type': 'list',
                'name': 'license',
                'message': 'Choose a License:',
                'choices': [
                    'MIT',
                    'Apache 2.0',
                    'GPLv3',
                    'BSD 3-Clause',
                    'Unlicense',
                    'None'
                ]
            },
            {
                'type': 'input',
                'name': 'author',
                'message': 'Author Name:'
            },
            {
                'type': 'input',
                'name': 'email',
                'message': 'Contact Email:',
                'validate': lambda val: '@' in val or 'Please enter a valid email'
            },
            {
                'type': 'input',
                'name': 'github',
                'message': 'GitHub Username:'
            }
        ]
        
    def ask(self):
        return prompt(self.questions)
