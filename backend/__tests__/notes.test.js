const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../index'); // or the correct file if named differently

const NOTES_FILE = path.join(__dirname, '..', 'notes.json');

// Reset the notes file before each test
beforeEach(() => {
  fs.writeFileSync(NOTES_FILE, '[]');
});

describe('Notes API', () => {
  it('GET /api/notes returns an empty array', async () => {
    const res = await request(app).get('/api/notes');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /api/notes creates a new note', async () => {
    const res = await request(app)
      .post('/api/notes')
      .send({ text: 'Test note' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.text).toBe('Test note');

    const allNotes = JSON.parse(fs.readFileSync(NOTES_FILE, 'utf-8'));
    expect(allNotes.length).toBe(1);
    expect(allNotes[0].text).toBe('Test note');
  });
});
