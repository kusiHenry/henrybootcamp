from questions import QuestionPrompter
from readme_creator import ReadmeCreator

def main():
    prompter = QuestionPrompter()
    answers = prompter.ask()
    creator = ReadmeCreator(answers)
    creator.save_to_file()

if __name__ == "__main__":
    main()