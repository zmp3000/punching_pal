# Semenuk Andrey Nikolaevich

**Contact Information:**
- Date and year of birth: 06/23/2005
- Place of study: Private Educational Institution “College of Business and Law”, 4 years, specialty “Information Technology Software”
- Phone: +375292534534
- E-mail: asemenuk100@gmail.com
- Telegram: @semenuke    

**Briefly About Myself:**
I strive for innovation and continuous development. My goals are success in the professional sphere and creating something valuable for society.

**Goals and Priorities:**
My goal is to contribute to areas where communication and persistence are key. I aim to develop and refine my skills for effective interaction and overcoming professional challenges.

**Strong Points:**
I have a high level of communicability, the ability to find common ground with people, and readiness for continuous self-improvement.

**Experience:**
I completed an internship at OAO "WEBDAD". I was involved in migrating the company's website from Strapi to Directus, using GitHub for version control and collaboration. I gained experience with GraphQL, optimizing data queries and mutations. I also learned and used Storybook for developing isolated UI components. For task management, I used Jira. I worked on a company website built with Vue.js and Nuxt.js.

## Thesis Project:

For my thesis project, I chose React Native and React for the frontend, Tailwind CSS for design, and Node.js with Express.js for the backend. This decision was based on my previous experience with various libraries and frameworks.
I am confident that my qualities and commitment to development can significantly enrich your team. I am ready to start my professional journey and invest all my energy in achieving common goals.

## Skills and Proficiency:

- HTML, CSS, JS, React JS, React native, Angular, Vue, NgRx, Node.js, Express
- Tailwind CSS
- Python, Django, Django Rest Framework
- Java
- C#, C++ Basics
- Git, GitHub
- Sublime, Visual Studio, VS Code, PyCharm, Eclipse IDE, IntelliJ IDEA
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

- Путь в IT Python PRO 
- JavaScript/Front-end 2023Q4\*\* 

**Languages:**

- Russian - Native
- English - Intermediate/Upper-intermediate (according to the online test at [www.efset.org](www.efset.org))
