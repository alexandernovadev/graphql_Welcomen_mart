'use strict'

const mockCourses = [
  {
    _id: 'anyid',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programcion',
  },
  {
    _id: 'anyid2',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programcion',
  },
  {
    _id: 'anyid11',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programcion',
  },
]

module.exports = {
  Query: {
    getCourses: () => mockCourses,
    getCourse: (_, { id }) => mockCourses.find((course) => course._id === id),
  },
}
