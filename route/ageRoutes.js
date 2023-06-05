const express = require("express");
const router = express.Router();
const agesController = require("../controllers/agesController");

router
   .route("/")
   .get(agesController.getAllCategory)
   .post(agesController.createCategory)
   .patch(agesController.updateCategory)
   .delete(agesController.deleteCategory);

router.route("/paginate").post(agesController.getAgePaginate);
router.route("/:ageId").get(agesController.getCategoryById);

module.exports = router;
