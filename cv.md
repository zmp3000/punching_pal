# Semenuk Andrey Nikolaevich

**Contact Information:**

- Phone: +375 29 2534534
- E-mail: asemenuk100@gmail.com
- Telegram: @semenukan

**Briefly About Myself:**
I am driven to create innovative solutions and continuously pursue personal development. My goals include not only achieving success in the professional sphere but also creating something new and valuable for society.

**Goals and Priorities:**
My drive to create something new inspires me to seek creative solutions and innovations. I aspire to contribute to areas where communication and perseverance play a key role. My goal is to develop and refine my skills to interact effectively with colleagues and overcome any professional challenges.

**Strong Points:**
One of my strengths is a high level of communicability. I can establish common ground with different people, facilitating successful teamwork. My experience in learning and developing personal skills demonstrates my readiness for continuous self-improvement.

**Experience:**
During my internship at OAO "WEBDAD", I was part of a team comprised of my fellow group members, where we took on the task of migrating the company's website from Strapi to Directus. This project provided me with a valuable opportunity to apply my knowledge of GitHub in a practical setting, utilizing it for version control and collaboration. This experience allowed me to further hone my skills and understand the importance of efficient code management in a team environment.

In addition, I delved into the world of GraphQL while working on this migration project. I learned its intricacies and applied this knowledge to optimize data queries and mutations. This has not only broadened my skill set but also given me a deeper understanding of API architectures.

I also gained hands-on experience with Storybook, a tool that significantly improved my ability to develop UI components in isolation. This has allowed me to ensure the quality and consistency of UI elements, contributing to a more efficient and streamlined development process.

Moreover, I was introduced to Jira for task management. Through Jira, I received my work assignments, tracked project progress, and collaborated with my team members. This experience has helped me appreciate the value of organized task management in ensuring project success.

The project I worked on was a website of the company built with Vue.js and Nuxt.js. Working with these technologies, I was able to enhance my frontend development skills, particularly in creating dynamic, server-rendered applications. This experience has further solidified my passion for web development and my commitment to continuous learning and improvement.
When it came to choosing the technology for my thesis project, I decided to go with React Native and React for the frontend, Tailwind CSS as highly customizable, low-level CSS framework that gives developers the ability to build modern, responsive designs without leaving their HTML or JSX. For the backend, I chose Node.js along with Express.js. This decision was based on my experience with various libraries and frameworks that I had used previously. I found React Native and React to be the most convenient and efficient tools for frontend application development, while Node.js and Express.js provided me with a robust and scalable backend solution. Working on my thesis project with these technologies allowed me to deepen my understanding of their capabilities and nuances. 

I am confident that my qualities and commitment to development can significantly enrich your team. I am ready to start my professional journey and invest all my energy in achieving common goals.

## Skills and Proficiency:

- HTML, CSS, JS, React JS, React native, Node.js, Express
- Tailwind CSS
- Python, Django, Django Rest Framework
- Java Basics
- C# Basics
- Git, GitHub
- Sublime, Visual Studio, VS Code, PyCharm, Eclipse IDE
- Directus

## Code Example:

_Write a Python program to solve the traveling salesman problem. Given a set of cities with known distances between them, find the shortest path that passes through each city exactly once and returns to the starting city._

```python
from itertools import permutations

def calculate_total_distance(path, distances):
    total_distance = 0
    for i in range(len(path) - 1):
        total_distance += distances[path[i]][path[i + 1]]
    total_distance += distances[path[-1]][path[0]]
    return total_distance

def traveling_salesman_bruteforce(distances):
    num_cities = len(distances)
    all_paths = permutations(range(num_cities))

    shortest_path = None
    shortest_distance = float('inf')

    for path in all_paths:
        current_distance = calculate_total_distance(path, distances)
        if current_distance < shortest_distance:
            shortest_distance = current_distance
            shortest_path = path

    return shortest_path, shortest_distance

distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]

shortest_path, shortest_distance = traveling_salesman_bruteforce(distances)

print(f"Shortest path: {shortest_path}")
print(f"Path length: {shortest_distance}")
```

**Courses**

- Путь в IT Python PRO (in progress)
- JavaScript/Front-end 2023Q4\*\* (in progress)

**Languages:**

- Russian - Native
- English - Intermediate/Upper-intermediate (according to the online test at [www.efset.org](www.efset.org))
