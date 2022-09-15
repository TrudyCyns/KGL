const Produce = require("../models/Produce");
const logger = require("./logger");

exports.getAllProduce = async (req, res) => {
  try {
    const user = req.session.user;

    const branchProcs = await Produce.find()
      .where("brname")
      .equals(user.branch);

    res.status(200).render("produce", {
      branchProcs,
      title: "Produce",
      user: req.session.user,
    });
    logger.produceLogger.log("info", "Succesfully got procurement records");
  } catch (err) {
    req.flash("error_message", "Failed to retrieve Procurement Records.");
    res.redirect("back");
    logger.produceLogger.log("error", "failed to retrieve procurement records");
  }
};

exports.getProduce = async (req, res) => {
  try {
    const produce = await Produce.findById(req.params.id);

    res.status(201).render("editproduce", {
      produce,
      title: "Edit Produce",
      user: req.session.user,
    });
  } catch (err) {
    req.flash("error_message", "Failed to retrieve Procurement Record.");
    res.redirect("back");
  }
};

exports.createProduce = async (req, res) => {
  try {
    await Produce.create(req.body);

    req.flash("success_msg", "Successfuly created Procurement Record.");
    res.redirect("back");
  } catch (err) {
    req.flash("error_message", "Failed to create Procurement Record.");
    res.redirect("back");
  }
};

exports.updateProduce = async (req, res) => {
  try {
    await Produce.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    req.flash("success_msg", "Successfuly updated Procurement Record.");
    res.redirect("back");
  } catch (error) {
    req.flash("error_message", "Failed to update Procurement Record.");
    res.redirect("back");
  }
};

exports.deleteProduce = async (req, res) => {
  try {
    await Produce.findByIdAndDelete(req.params.id);

    req.flash("success_msg", "Successfuly deleted Procurement Record.");
    res.redirect("back");
  } catch (err) {
    req.flash("error_message", "Failed to delete Procurement Record.");
    res.redirect("back");
  }
};
