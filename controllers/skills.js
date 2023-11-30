const Skill = require("../models/skill");

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,

}

function show(req, res) {
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id),
        title: "Skill Details",
    })
}

function index(req, res) {
    // const skills = Skill.getAll()
    res.render("skills/index", {
        skills: Skill.getAll(),
        title: "All Skills",
    })
}

function newSkill(req, res) {
    res.render("skills/new", { title: "What's your new Skill?"});
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect("/skills");
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect("/skills")
}

