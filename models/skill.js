const skills = [
    {id: 125223, name: "JavaScript", proficiency: true,},
    {id: 127904, name: "HTML", proficiency: true,},
    {id: 139608, name: "CSS", proficiency: false,},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}