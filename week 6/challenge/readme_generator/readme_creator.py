from datetime import datetime

LICENSE_BADGES = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "BSD 3-Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "None": ""
}

class ReadmeCreator:
    def __init__(self, data):
        self.data = data  # fixed: should be = not -

    def generate_markdown(self):
        content = f"""# {self.data['title']}

{LICENSE_BADGES.get(self.data['license'], '')}

## Description

{self.data['description']}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

{self.data['installation']}

## Usage

{self.data['usage']}

## License

This project is covered under the {self.data['license']} license.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Questions

For any questions, please contact me at:

- GitHub: [{self.data['github']}](https://github.com/{self.data['github']})
- Email: {self.data['email']}

---

_This README was generated with python using [README-Generator](https://github.com/yourusername/readme-generator)_
"""
        return content

    def save_to_file(self, filename="README.md"):
        with open(filename, 'w') as f:
            f.write(self.generate_markdown())
        print(f" README.md generated successfully!")
