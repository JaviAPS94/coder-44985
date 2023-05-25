import { Students } from "../dao/factory.js";
import StudentsRepository from "../repositories/students.repository.js";

const students = new Students();
const studentsRepository = new StudentsRepository(students);

export const getAllPaginated = async (limit, page) => {
    const students = await studentsRepository.getAllPaginated(limit, page);
    return students;
}