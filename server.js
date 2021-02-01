const express = require('express')
const app = express()
app.use(express.json())
// mock data
const gradeAll = [
  {
    grade: 'A',
    maxScore: 100,
    minScore: 80,
    gradeNum: 4.00
  },
  {
    grade: 'B+',
    maxScore: 79,
    minScore: 75,
    gradeNum: 3.50
  },
  {
    grade: 'B',
    maxScore: 74,
    minScore: 70,
    gradeNum: 3.00
  },
  {
    grade: 'C+',
    maxScore: 69,
    minScore: 65,
    gradeNum: 2.50
  },
  {
    grade: 'C',
    maxScore: 64,
    minScore: 60,
    gradeNum: 2.00
  },
  {
    grade: 'D+',
    maxScore: 59,
    minScore: 55,
    gradeNum: 1.50
  },
  {
    grade: 'D',
    maxScore: 54,
    minScore: 50,
    gradeNum: 1.00
  },
  {
    grade: 'F',
    maxScore: 49,
    minScore: 0,
    gradeNum: 0.00
  }

] 
app.get('/gradeAll/:Score', (req, res) => {
  const score = Math.floor(req.params['Score']);
  const result = gradeAll.find(gradeAll => score >= gradeAll.minScore && score <= gradeAll.maxScore)
  res.json(result)
}) 

app.listen(9000, () => {
    console.log('Application is running on port 9000')
})