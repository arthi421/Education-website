
import './Courses1.css';

const courses = [
    { id: 1, title: 'Software Engineering Course', description: 'Description of Course 1' },
    { id: 2, title: 'Data Analytics Course', description: 'Description of Course 2' },
    { id: 3, title: 'Full Stack Course', description: 'Description of Course 3' },
    { id: 4, title: 'Cybersecurity Course', description: 'Description of Course 4' },
    { id: 5, title: 'UI/UX Design Course', description: 'Description of Course 5' },
    { id: 6, title: 'Introduction to HTML, CSS, JavaScript', description: 'Description of Course 6' },
    { id: 7, title: 'MYSQL Course', description: 'Description of Course 7' },
    { id: 8, title: 'ReactJs Course', description: 'Description of Course 8' },
    { id: 9, title: 'ExpressJs Course', description: 'Description of Course 9' },
    { id: 10, title: 'Graphics Design', description: 'Description of Course 10' },
];

const Courses1 = () => {
    return (
        <section className="course-list">
            {courses.map(course => (
                <div key={course.id} className="course">
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <button>Enroll Now</button>
                </div>
            ))}
        </section>
    );
};

export default Courses1;
